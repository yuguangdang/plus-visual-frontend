import React, { useCallback, useEffect, useState, useMemo } from 'react';
import ReactFlow, {
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    applyNodeChanges,
    useReactFlow,
    ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomBidirectionalNode from './CustomBidirectionalNode';
import CustomGroupNode from './CustomGroupNode';
import CustomDirectionalEdge from './CustomDirectionalEdge';
import SSEIndicator from './SSEIndicator';

import { initialNodes, initialEdges } from './IndividualNodesData';
import { usePlusSSE } from './usePlusSSE';
import { AnimationProvider, useAnimationState } from './AnimationContext';
import {
    REACT_FLOW_CONFIG,
    CAMERA_ANIMATION_CONFIG
} from './constants';
import { FLOW_CONTAINER_STYLES } from './styles';
import { COLORS, EDGE_STYLES } from './colors';

// Define nodeTypes outside component to prevent recreation on every render
const nodeTypes = {
    customBidirectional: CustomBidirectionalNode,
    group: CustomGroupNode
};

// Define edgeTypes outside component to prevent recreation on every render
const edgeTypes = {
    custom: CustomDirectionalEdge
};

// Helper function to truncate long messages
const truncateMessage = (message, maxLength = 50) => {
    if (!message) return '';
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength - 3) + '...';
};

// Inner component that uses animation context
function FlowGraphInner() {
    const { activeNodes, processingNodes, activeEdges, activeTools, stateMessage, userMessage, nodeMessages, animationPhase, subPhase, isSSEConnected } = useAnimationState();
    const { fitView, setCenter, fitBounds } = useReactFlow();
    const [isReady, setIsReady] = useState(false);

    // Apply animation state to nodes
    const animatedNodes = useMemo(() => {
        return initialNodes.map(node => {
            // Check if this is an active agent or tool
            const isActive = activeNodes.has(node.id) ||
                            (node.data.nodeType === 'tool' && activeTools.has(node.data.parentAgent));
            const isProcessing = processingNodes.has(node.id) ||
                               (node.data.nodeType === 'tool' && activeTools.has(node.data.parentAgent));

            // Determine if node should be dimmed
            // Dim non-active nodes when there are active nodes (but never dim tier 1)
            const isDimmed = node.data.tier !== 1 && activeNodes.size > 0 && !isActive;

            // Get node-specific message
            let nodeMessage = '';

            if (node.id === 'orchestrator' && isActive) {
                // Use the stateMessage directly from AnimationContext for orchestrator
                // This ensures messages update properly with phase transitions
                nodeMessage = stateMessage;
            } else if (node.id === 'user' && isActive) {
                // User node messages
                if (animationPhase === 'chat_started' && subPhase === 'user_message') {
                    // Show the actual user message, truncated if too long
                    nodeMessage = truncateMessage(userMessage, 50) || 'Request sent';
                } else if (animationPhase === 'chat_completed' && subPhase === 'complete') {
                    nodeMessage = 'Response received';
                }
            } else if (node.id === 'usercontext' && isActive) {
                // User Context messages
                if (animationPhase === 'chat_started') {
                    if (subPhase === 'context_processing') {
                        nodeMessage = 'Retrieving context...';
                    }
                }
            } else if (node.id !== 'user' && node.id !== 'usercontext' && isActive) {
                // For agents and tools, use nodeMessages from context with cycling messages
                nodeMessage = nodeMessages[node.id] || 'Processing...';
            }

            return {
                ...node,
                data: {
                    ...node.data,
                    active: isActive,
                    processing: isProcessing,
                    nodeMessage,
                    dimmed: isDimmed
                }
            };
        });
    }, [activeNodes, processingNodes, activeTools, stateMessage, userMessage, nodeMessages, animationPhase, subPhase]);

    // Apply animation state to edges
    const animatedEdges = useMemo(() => {
        return initialEdges.map(edge => {
            // Check for forward, reverse, or bidirectional activation
            const isForward = activeEdges.has(edge.id);
            const isReverse = activeEdges.has(`${edge.id}-reverse`);
            const isBidirectional = isForward && isReverse;
            const isActive = isForward || isReverse;

            // Determine direction
            let direction = 'none';
            if (isBidirectional) {
                direction = 'bidirectional';
            } else if (isForward) {
                direction = 'forward';
            } else if (isReverse) {
                direction = 'reverse';
            }

            // Determine edge color based on connected nodes
            let activeColor = COLORS.EDGE_ACTIVE_GREEN; // default
            if (isActive) {
                // Find the source node to get its color
                const sourceNode = initialNodes.find(n => n.id === edge.source);
                if (sourceNode && sourceNode.data && sourceNode.data.color) {
                    activeColor = sourceNode.data.color;
                }
            }

            // Return edge with updated data for custom edge component
            return {
                ...edge,
                hidden: false,  // Always show all edges
                data: {
                    ...edge.data,
                    direction,
                    animated: isActive,
                    color: isActive ? activeColor : COLORS.EDGE_DEFAULT
                }
            };
        });
    }, [activeEdges]);

    const [nodes, setNodes] = useNodesState(animatedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(animatedEdges);

    // Memoize nodeTypes and edgeTypes to prevent React Flow warnings
    const memoizedNodeTypes = useMemo(() => nodeTypes, []);
    const memoizedEdgeTypes = useMemo(() => edgeTypes, []);

    // Update nodes whenever animation state changes
    useEffect(() => {
        setNodes(animatedNodes);
    }, [animatedNodes, setNodes]);

    // Update edges whenever animation state changes
    useEffect(() => {
        setEdges(animatedEdges);
    }, [animatedEdges, setEdges]);

    // Camera tracking based on animation phase
    useEffect(() => {
        if (!animationPhase || animationPhase === 'idle') return;

        const { ZOOM_LEVELS, DURATIONS, NODE_POSITIONS } = CAMERA_ANIMATION_CONFIG;
        let targetPosition = null;
        let targetZoom = ZOOM_LEVELS.OVERVIEW;
        let duration = DURATIONS.NORMAL;

        // Determine camera position based on phase and subphase
        switch (animationPhase) {
            case 'chat_started':
                if (subPhase === 'user_message') {
                    targetPosition = NODE_POSITIONS.user;
                    targetZoom = ZOOM_LEVELS.FOCUSED_VIEW;
                    duration = DURATIONS.SMOOTH;
                } else if (subPhase === 'orchestrator_processing') {
                    targetPosition = NODE_POSITIONS.orchestrator;
                    targetZoom = ZOOM_LEVELS.FOCUSED_VIEW;
                    duration = DURATIONS.SMOOTH;
                } else if (subPhase === 'context_processing') {
                    targetPosition = NODE_POSITIONS.usercontext;
                    targetZoom = ZOOM_LEVELS.FOCUSED_VIEW;
                    duration = DURATIONS.SMOOTH;
                } else if (subPhase === 'from_context') {
                    // Track back to orchestrator
                    targetPosition = NODE_POSITIONS.orchestrator;
                    targetZoom = ZOOM_LEVELS.FOCUSED_VIEW;
                    duration = DURATIONS.NORMAL;
                }
                break;

            case 'intention_extracted':
                if (subPhase === 'dispatching' || subPhase === 'agents_processing') {
                    // Get active agent positions for fitBounds
                    const activeAgentNodes = Array.from(activeNodes).filter(id =>
                        NODE_POSITIONS[id] && id !== 'orchestrator' && id !== 'user' && id !== 'usercontext'
                    );

                    if (activeAgentNodes.length > 1) {
                        // Multiple agents: use fitBounds (adjusted for nodeOrigin=[0.5, 0.5])
                        const bounds = {
                            x: Math.min(...activeAgentNodes.map(id => NODE_POSITIONS[id].x)) - 55,
                            y: Math.min(...activeAgentNodes.map(id => NODE_POSITIONS[id].y)) - 55,
                            width: Math.max(...activeAgentNodes.map(id => NODE_POSITIONS[id].x)) -
                                   Math.min(...activeAgentNodes.map(id => NODE_POSITIONS[id].x)) + 110,
                            height: 90
                        };
                        fitBounds(bounds, { padding: 0, duration: DURATIONS.SMOOTH });
                    } else if (activeAgentNodes.length === 1) {
                        // Single agent: focus on it
                        targetPosition = NODE_POSITIONS[activeAgentNodes[0]];
                        targetZoom = ZOOM_LEVELS.FOCUSED_VIEW;
                        duration = DURATIONS.SMOOTH;
                    } else {
                        // Fallback to orchestrator view
                        targetPosition = { x: 0, y: 100 };
                        targetZoom = ZOOM_LEVELS.FOCUSED_VIEW;
                        duration = DURATIONS.SMOOTH;
                    }
                } else if (subPhase === 'tools_active') {
                    // Show agents and their tools
                    const activeAgentNodes = Array.from(activeNodes).filter(id =>
                        NODE_POSITIONS[id] && id !== 'orchestrator' && id !== 'user' && id !== 'usercontext'
                    );

                    if (activeAgentNodes.length > 0) {
                        // Calculate bounds including tools (adjusted for nodeOrigin=[0.5, 0.5])
                        const agentAndToolPositions = [
                            ...activeAgentNodes.map(id => NODE_POSITIONS[id]),
                            ...activeAgentNodes.map(id => NODE_POSITIONS[`${id}-tool`]).filter(Boolean)
                        ];

                        const bounds = {
                            x: Math.min(...agentAndToolPositions.map(pos => pos.x)) - 55,
                            y: Math.min(...agentAndToolPositions.map(pos => pos.y)) - 55,
                            width: Math.max(...agentAndToolPositions.map(pos => pos.x)) -
                                   Math.min(...agentAndToolPositions.map(pos => pos.x)) + 110,
                            height: Math.max(...agentAndToolPositions.map(pos => pos.y)) -
                                    Math.min(...agentAndToolPositions.map(pos => pos.y)) + 90
                        };
                        fitBounds(bounds, { padding: 0.04, duration: DURATIONS.NORMAL });
                    }
                } else if (subPhase === 'tools_returning') {
                    // Keep showing agents and tools
                    // Same as tools_active
                } else if (subPhase === 'returning') {
                    // Pan back up to orchestrator
                    targetPosition = NODE_POSITIONS.orchestrator;
                    targetZoom = ZOOM_LEVELS.FOCUSED_VIEW;
                    duration = DURATIONS.SMOOTH;
                }
                break;

            case 'chat_completed':
                if (subPhase === 'finalizing') {
                    targetPosition = NODE_POSITIONS.orchestrator;
                    targetZoom = ZOOM_LEVELS.FOCUSED_VIEW;
                    duration = DURATIONS.QUICK;
                } else if (subPhase === 'returning_to_user') {
                    targetPosition = NODE_POSITIONS.user;
                    targetZoom = ZOOM_LEVELS.FOCUSED_VIEW;
                    duration = DURATIONS.SMOOTH;
                } else if (subPhase === 'complete') {
                    // Use same fitView as initial render for exact match
                    fitView({ padding: 0.1, duration: DURATIONS.SLOW });
                    return; // Skip the setCenter logic below
                }
                break;

            default:
                // Default to overview
                targetPosition = { x: 0, y: 75 };  // True center of the graph
                targetZoom = ZOOM_LEVELS.OVERVIEW;
                duration = DURATIONS.NORMAL;
        }

        // Apply camera animation if we have a target
        if (targetPosition) {
            setCenter(targetPosition.x, targetPosition.y, {
                zoom: targetZoom,
                duration
            });
        }
    }, [animationPhase, subPhase, setCenter]);

    // Initialize SSE connection
    usePlusSSE();

    // Handle node changes
    const onNodesChange = useCallback((changes) => {
        setNodes((nds) => applyNodeChanges(changes, nds));
    }, [setNodes]);

    // Set initial view on mount and handle ready state
    useEffect(() => {
        // Delay initialization to avoid NaN errors
        const initTimer = setTimeout(() => {
            setIsReady(true);
        }, 50);

        const fitTimer = setTimeout(() => {
            fitView({ padding: 0.1, duration: 800 });
        }, 150);

        return () => {
            clearTimeout(initTimer);
            clearTimeout(fitTimer);
        };
    }, [fitView]);

    if (!isReady) {
        return (
            <div style={{ ...FLOW_CONTAINER_STYLES, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a' }}>
                <div style={{ color: '#666', fontFamily: 'monospace' }}>Initializing visualization...</div>
            </div>
        );
    }

    return (
        <div style={FLOW_CONTAINER_STYLES}>
            <SSEIndicator isConnected={isSSEConnected} />
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={memoizedNodeTypes}
                edgeTypes={memoizedEdgeTypes}
                fitView
                minZoom={REACT_FLOW_CONFIG.MIN_ZOOM}
                maxZoom={REACT_FLOW_CONFIG.MAX_ZOOM}
                defaultViewport={REACT_FLOW_CONFIG.DEFAULT_VIEWPORT}
                nodeOrigin={[0.5, 0.5]}
                nodesDraggable={REACT_FLOW_CONFIG.NODES_DRAGGABLE}
                nodesConnectable={REACT_FLOW_CONFIG.NODES_CONNECTABLE}
                elementsSelectable={REACT_FLOW_CONFIG.ELEMENTS_SELECTABLE}
                snapToGrid={REACT_FLOW_CONFIG.SNAP_TO_GRID}
                zoomOnDoubleClick={false}
                panOnScroll={true}
                preventScrolling={false}
                proOptions={{ hideAttribution: true }}
            >
                <Controls />
            </ReactFlow>
        </div>
    );
}

// Main component with ReactFlow provider
function FlowGraph() {
    return (
        <AnimationProvider>
            <ReactFlowProvider>
                <FlowGraphInner />
            </ReactFlowProvider>
        </AnimationProvider>
    );
}

export default FlowGraph;