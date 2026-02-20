import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { getRandomMessage } from './nodeMessages';

// State-driven animation context for better control and immediate exits
const AnimationContext = createContext(null);

export const useAnimationState = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimationState must be used within AnimationProvider');
  }
  return context;
};

export const AnimationProvider = ({ children }) => {
  // Animation phase state machine
  const [animationPhase, setAnimationPhase] = useState('idle');
  const [subPhase, setSubPhase] = useState(null);

  // Ref to track current animation phase (avoids closure issues)
  const animationPhaseRef = useRef('idle');

  // Active elements
  const [activeNodes, setActiveNodes] = useState(new Set());
  const [processingNodes, setProcessingNodes] = useState(new Set());
  const [activeEdges, setActiveEdges] = useState(new Set());
  const [activeTools, setActiveTools] = useState(new Set());


  // State message and SSE status
  const [stateMessage, setStateMessage] = useState('System Ready');
  const [userMessage, setUserMessage] = useState(''); // Store the user's message
  const [nodeMessages, setNodeMessages] = useState({}); // Individual node messages
  const messageIntervals = useRef({}); // Store individual intervals for each node
  const [isSSEConnected, setIsSSEConnected] = useState(false);

  // Store current intention for intention-aware messages
  const [currentIntention, setCurrentIntention] = useState(null);

  // Loop control
  const [loopAgents, setLoopAgents] = useState([]);
  const [isLooping, setIsLooping] = useState(false);

  // Animation sequencing timer (controls delays between phases)
  const animationTimerRef = useRef(null);


  // Clear all timers
  const clearAllTimers = useCallback(() => {
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
    }
    // Clear message interval
    // Clear all message intervals
    Object.values(messageIntervals.current).forEach(clearInterval);
    messageIntervals.current = {};
  }, []);

  // Reset all state
  const resetAll = useCallback(() => {
    clearAllTimers();
    // Clear message interval
    // Clear all message intervals
    Object.values(messageIntervals.current).forEach(clearInterval);
    messageIntervals.current = {};
    setAnimationPhase('idle');
    setSubPhase(null);
    setActiveNodes(new Set());
    setProcessingNodes(new Set());
    setActiveEdges(new Set());
    setActiveTools(new Set());
    setStateMessage('System Ready');
    setUserMessage(''); // Clear user message
    setNodeMessages({});
    setIsLooping(false);
    setLoopAgents([]);
  }, [clearAllTimers]);

  // Handle loop sub-phases with individual nodes
  const handleLoopPhase = useCallback((subPhase) => {
    if (!loopAgents || loopAgents.length === 0) return;

    switch(subPhase) {
      case 'to_agents':
        // Activate orchestrator and individual agents
        setActiveNodes(new Set(['orchestrator', ...loopAgents]));
        setProcessingNodes(new Set(['orchestrator', ...loopAgents]));
        const toAgentEdges = loopAgents.map(agent => `orchestrator-${agent}`);
        setActiveEdges(new Set(toAgentEdges));
        setStateMessage(`Calling sub agents: ${loopAgents.join(', ')}...`);
        break;

      case 'agents_to_tools':
        // Activate agent tools
        const tools = loopAgents.map(agent => `${agent}-tool`);
        setActiveNodes(new Set([...loopAgents, ...tools]));
        setProcessingNodes(new Set(tools));
        const toToolEdges = loopAgents.map(agent => `${agent}-${agent}-tool`);
        setActiveEdges(new Set(toToolEdges));
        setActiveTools(new Set(loopAgents));
        setStateMessage(`Calling toolsets: ${loopAgents.join(', ')}...`);
        break;

      case 'tools_return':
        // Tools returning to agents
        const returnTools = loopAgents.map(agent => `${agent}-tool`);
        setActiveNodes(new Set([...loopAgents, ...returnTools]));
        setProcessingNodes(new Set(loopAgents));
        setActiveTools(new Set());
        const fromToolEdges = loopAgents.map(agent => `${agent}-${agent}-tool-reverse`);
        setActiveEdges(new Set(fromToolEdges));
        setStateMessage('Tools returning results...');
        break;

      case 'return_to_orchestrator':
        // Agents returning to orchestrator
        setActiveNodes(new Set(['orchestrator', ...loopAgents]));
        setProcessingNodes(new Set(['orchestrator']));
        const fromAgentEdges = loopAgents.map(agent => `orchestrator-${agent}-reverse`);
        setActiveEdges(new Set(fromAgentEdges));
        setStateMessage('Orchestrator coordinating...');
        break;

      case 'loop_complete':
        // Ready for next cycle
        setActiveNodes(new Set(['orchestrator']));
        setProcessingNodes(new Set(['orchestrator']));
        setActiveEdges(new Set());
            setActiveTools(new Set());
        break;
    }
  }, [loopAgents]);

  // Keep animationPhaseRef in sync with animationPhase state
  useEffect(() => {
    animationPhaseRef.current = animationPhase;
  }, [animationPhase]);

  // Clear this useEffect since we're handling messages in FlowGraph now
  // We'll keep nodeMessages state for potential future use but not populate it

  // Phase transition effect
  useEffect(() => {
    // Clear timers first
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
    }


    // Apply visual state based on current phase and subphase
    switch(animationPhase) {
      case 'idle':
        setActiveNodes(new Set());
        setProcessingNodes(new Set());
        setActiveEdges(new Set());
            setActiveTools(new Set());
        break;

      case 'chat_started':
        // Handle chat_started phase with subphases
        switch(subPhase) {
          case 'user_message':
            setActiveNodes(new Set(['user']));
            setProcessingNodes(new Set(['user']));
            break;
          case 'to_orchestrator':
            setActiveNodes(new Set(['user', 'orchestrator']));
            setProcessingNodes(new Set(['orchestrator']));
            setActiveEdges(new Set(['user-orchestrator']));
            setStateMessage('Receiving user request...');
            break;
          case 'orchestrator_processing':
            setActiveNodes(new Set(['orchestrator']));
            setProcessingNodes(new Set(['orchestrator']));
            setActiveEdges(new Set(['user-orchestrator']));
            setStateMessage('Processing request...');
            break;
          case 'to_context':
            setActiveNodes(new Set(['orchestrator']));
            setProcessingNodes(new Set(['orchestrator']));
            setActiveEdges(new Set(['user-orchestrator', 'orchestrator-usercontext']));
            setStateMessage('Fetching user context...');
            break;
          case 'context_processing':
            setActiveNodes(new Set(['orchestrator', 'usercontext']));
            setProcessingNodes(new Set(['orchestrator', 'usercontext']));
            setActiveEdges(new Set(['orchestrator-usercontext']));
            setStateMessage('Retrieving user context...');
            break;
          case 'from_context':
            setActiveNodes(new Set(['orchestrator']));
            setProcessingNodes(new Set(['orchestrator']));
            setActiveEdges(new Set(['orchestrator-usercontext-reverse']));
            setStateMessage('Context retrieved');
            break;
          default:
            // Default state for chat_started
            setActiveNodes(new Set(['user']));
            setProcessingNodes(new Set(['user']));
        }
        break;

      case 'intention_extracted':
        // Handle intention_extracted phase with subphases
        switch(subPhase) {
          case 'dispatching':
            setActiveNodes(new Set(['orchestrator', ...loopAgents]));
            setProcessingNodes(new Set(['orchestrator', ...loopAgents]));
            // Set edges from orchestrator to each active agent
            const orchestratorToAgentEdges = loopAgents.map(agent => `orchestrator-${agent}`);
            setActiveEdges(new Set(orchestratorToAgentEdges));
            setStateMessage(`Assigning tasks to ${loopAgents.join(', ')}...`);
            break;
          case 'agents_processing':
            setActiveNodes(new Set(['orchestrator', ...loopAgents]));
            setProcessingNodes(new Set(['orchestrator', ...loopAgents]));
            const agentEdges = loopAgents.map(agent => `orchestrator-${agent}`);
            setActiveEdges(new Set(agentEdges));
            setStateMessage(`Coordinating agents...`);
            // Messages will be handled by the message rotation effect
            break;
          case 'tools_active':
            // Activate individual tool nodes
            const toolNodes = loopAgents.map(agent => `${agent}-tool`);
            setActiveNodes(new Set([...loopAgents, ...toolNodes]));
            setProcessingNodes(new Set(toolNodes));
            // Set edges from agents to their tools
            const agentToToolEdges = loopAgents.map(agent => `${agent}-${agent}-tool`);
            setActiveEdges(new Set(agentToToolEdges));
            setActiveTools(new Set(loopAgents));
            setStateMessage(`Calling toolsets: ${loopAgents.join(', ')}...`);
            // Messages will be handled by the message rotation effect
            break;
          case 'tools_returning':
            const returnToolNodes = loopAgents.map(agent => `${agent}-tool`);
            setActiveNodes(new Set([...loopAgents, ...returnToolNodes]));
            setProcessingNodes(new Set(loopAgents));
            // Set reverse edges from tools to agents
            const toolToAgentEdges = loopAgents.map(agent => `${agent}-${agent}-tool-reverse`);
            setActiveEdges(new Set(toolToAgentEdges));
            setActiveTools(new Set());
            setStateMessage('Tools returning results...');
            // Messages will be handled by the message rotation effect
            break;
          case 'returning':
            setActiveNodes(new Set(['orchestrator', ...loopAgents]));
            setProcessingNodes(new Set(['orchestrator']));
            // Set reverse edges from agents to orchestrator
            const agentToOrchestratorEdges = loopAgents.map(agent => `orchestrator-${agent}-reverse`);
            setActiveEdges(new Set(agentToOrchestratorEdges));
            setStateMessage('Processing sub agent results...');
            break;
          default:
            handleLoopPhase(subPhase);
        }
        break;

      case 'chat_completed':
        // Handle chat_completed phase with subphases
        switch(subPhase) {
          case 'finalizing':
            setActiveNodes(new Set(['orchestrator']));
            setProcessingNodes(new Set(['orchestrator']));
            setActiveEdges(new Set());
                    setActiveTools(new Set());
            setStateMessage('Finalizing response...');
            break;
          case 'returning_to_user':
            setActiveNodes(new Set(['orchestrator', 'user']));
            setProcessingNodes(new Set(['orchestrator', 'user']));
            setActiveTools(new Set());
            setActiveEdges(new Set(['user-orchestrator-reverse']));
            setStateMessage('Returning response to user...');
            break;
          case 'complete':
            setActiveNodes(new Set(['user']));
            setProcessingNodes(new Set());
            setActiveEdges(new Set());
                    setStateMessage('Response returned to user');
            break;
          default:
            setActiveNodes(new Set(['orchestrator']));
            setProcessingNodes(new Set(['orchestrator']));
        }
        break;
    }

    // Schedule next subphase or phase transition
    let nextSubPhase = null;
    let nextPhase = null;
    let duration = 0;

    switch(animationPhase) {
      case 'chat_started':
        // Transition through subphases within chat_started
        switch(subPhase) {
          case 'user_message':
            nextSubPhase = 'to_orchestrator';
            duration = 1200;  // Standardized to 1200ms for all tier 1 activations
            break;
          case 'to_orchestrator':
            nextSubPhase = 'orchestrator_processing';
            duration = 1200;  // Standardized to 1200ms for all tier 1 activations
            break;
          case 'orchestrator_processing':
            nextSubPhase = 'to_context';
            duration = 500;  // Reduced for quicker transition
            break;
          case 'to_context':
            nextSubPhase = 'context_processing';
            duration = 1200;  // Standardized to 1200ms for all tier 1 activations
            break;
          case 'context_processing':
            nextSubPhase = 'from_context';
            duration = 1200;  // Standardized to 1200ms for all tier 1 activations
            break;
          case 'from_context':
            // Stay in chat_started, wait for intention_extracted event
            break;
          default:
            nextSubPhase = 'user_message';
            duration = 100;
        }
        break;

      case 'intention_extracted':
        // Transition through subphases within intention_extracted
        switch(subPhase) {
          case 'dispatching':
            nextSubPhase = 'agents_processing';
            duration = 100;  // Small delay for state to settle
            break;
          case 'agents_processing':
            nextSubPhase = 'tools_active';
            duration = 3600;  // Extended to 3600ms for 3 messages
            break;
          case 'tools_active':
            nextSubPhase = 'tools_returning';
            duration = 3600;  // Extended to 3600ms for 3 messages
            break;
          case 'tools_returning':
            nextSubPhase = 'returning';
            duration = 3600;  // Extended to 3600ms for 3 messages
            break;
          case 'returning':
            // Loop back to dispatching to continue the cycle
            nextSubPhase = 'dispatching';
            duration = 2000;  // Pause before restarting the loop
            break;
          default:
            if (loopAgents.length > 0) {
              nextSubPhase = 'dispatching';
              duration = 100;
            }
        }
        break;

      case 'chat_completed':
        // Transition through subphases within chat_completed
        switch(subPhase) {
          case 'finalizing':
            nextSubPhase = 'returning_to_user';
            duration = 500;  // Reduced from 1500ms
            break;
          case 'returning_to_user':
            nextSubPhase = 'complete';
            duration = 500;  // Reduced from 1200ms
            break;
          case 'complete':
            // Transition back to idle
            nextPhase = 'idle';
            duration = 400;
            break;
          default:
            nextSubPhase = 'finalizing';
            duration = 100;
        }
        break;
    }

    // Apply the next transition
    if (nextSubPhase && duration > 0) {
      animationTimerRef.current = setTimeout(() => {
        setSubPhase(nextSubPhase);
      }, duration);
    } else if (nextPhase && duration > 0) {
      animationTimerRef.current = setTimeout(() => {
        setAnimationPhase(nextPhase);
        setSubPhase(null);
      }, duration);
    }
  }, [animationPhase, subPhase, isLooping, loopAgents, handleLoopPhase]);

  // Message rotation effect for sub-agents and tools (intention-aware)
  useEffect(() => {
    if (animationPhase === 'intention_extracted' &&
        (subPhase === 'agents_processing' || subPhase === 'tools_active' || subPhase === 'tools_returning')) {

      // Clear any existing intervals
      Object.values(messageIntervals.current).forEach(clearInterval);
      messageIntervals.current = {};

      // Set up individual message rotation for each active node (intention-aware)
      activeNodes.forEach(nodeId => {
        if (nodeId !== 'orchestrator' && nodeId !== 'user' && nodeId !== 'usercontext') {
          // Set initial message with intention context
          setNodeMessages(prev => ({
            ...prev,
            [nodeId]: getRandomMessage(nodeId, currentIntention)
          }));

          // Random interval between 800-1500ms for variety
          const randomInterval = 800 + Math.random() * 700;

          // Set up rotation for this specific node (intention-aware)
          messageIntervals.current[nodeId] = setInterval(() => {
            setNodeMessages(prev => ({
              ...prev,
              [nodeId]: getRandomMessage(nodeId, currentIntention)
            }));
          }, randomInterval);
        }
      });

      // Cleanup on unmount or phase change
      return () => {
        Object.values(messageIntervals.current).forEach(clearInterval);
        messageIntervals.current = {};
        setNodeMessages({}); // Clear messages when phase ends
      };
    } else {
      // Clear messages when not in active phases
      setNodeMessages({});
      Object.values(messageIntervals.current).forEach(clearInterval);
      messageIntervals.current = {};
    }
  }, [animationPhase, subPhase, activeNodes, currentIntention]);

  // Remove handleLoopSubPhase as it's no longer needed

  // SSE event handlers
  const startChatStartedSequence = useCallback((message = '') => {
    resetAll();
    setUserMessage(message); // Store the user's message
    setStateMessage(`User: ${message || 'Request'}`);
    setTimeout(() => {
      setAnimationPhase('chat_started');
      setSubPhase('user_message');
    }, 100);
  }, [resetAll]);

  const startIntentionExtractedSequence = useCallback((agents, intention = null) => {
    // Store the intention for message context
    setCurrentIntention(intention);

    // Clear previous animation timer to start new sequence
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
    }

    // Validate agents - filter out non-sub-agent values like 'orchestrator'
    const validAgents = agents.filter(agent =>
      ['mytask', 'workrequest', 'analytics', 'requisition',
       'recruitment', 'leave', 'workorder', 'knowledge', 'email', 'finance'].includes(agent)
    );

    // Wait 1.5 seconds for remaining chat_started animation
    // Backend already delays 4s, chat_started takes 5.3s total, so we need ~1.3s more
    setTimeout(() => {
      // CRITICAL: Check if we're still in chat_started phase
      // If chat_completed already happened, ignore this late-arriving intention
      // Use ref to get current value, avoiding closure issues
      if (animationPhaseRef.current !== 'chat_started') {
        console.log(`[AnimationContext] Ignoring intention_extracted - current phase is '${animationPhaseRef.current}', not 'chat_started'`);
        return;
      }

      // Only start loop if we have valid sub-agents
      if (validAgents.length > 0) {
        console.log('[AnimationContext] Starting intention_extracted phase from chat_started');
        setLoopAgents(validAgents);
        setIsLooping(true);
        setAnimationPhase('intention_extracted');
        setSubPhase('dispatching');
      }
      // Otherwise stay in current phase
    }, 1500); // 1.5-second delay to ensure chat_started completes
  }, []); // No dependencies - callback remains stable

  const startChatCompletedSequence = useCallback(() => {
    console.log('[AnimationContext] FORCE STOP: chat_completed received, stopping all animations');

    // FORCEFULLY clear ALL timers and intervals
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
    }

    // Clear ALL message intervals for nodes
    Object.values(messageIntervals.current).forEach(clearInterval);
    messageIntervals.current = {};

    // Immediately stop looping and clear all active states
    setIsLooping(false);
    setLoopAgents([]);
    setActiveNodes(new Set());
    setProcessingNodes(new Set());
    setActiveEdges(new Set());
    setActiveTools(new Set());
    setNodeMessages({});

    // Force immediate transition to completion phase
    setAnimationPhase('chat_completed');
    setSubPhase('finalizing');
    setStateMessage('Finalizing response...');
  }, []);


  const value = {
    // Animation state
    animationPhase,
    subPhase,
    activeNodes,
    processingNodes,
    activeEdges,
    activeTools,
    stateMessage,
    userMessage,
    nodeMessages,
    isSSEConnected,

    // Methods
    setIsSSEConnected,
    setNodeMessages,
    startChatStartedSequence,
    startIntentionExtractedSequence,
    startChatCompletedSequence,
    resetAll
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};