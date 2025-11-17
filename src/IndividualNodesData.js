// Individual Nodes Architecture for Plus AI System
// Optimized for 1080x1080 display with adjacent multi-agent grouping
import { COLORS, EDGE_STYLES } from './colors';

// Node spacing configuration for square layout
const LAYOUT_CONFIG = {
  AGENT_SPACING: 100,  // Spacing between nodes (adjustable)
  TIER_1_Y: -140,  // Moderate position (was -170, then -120)
  TIER_2_Y: 60,    // Moderate spacing (was 100, then 40) - 200 unit gap from tier 1
  TIER_3_Y: 260    // Moderate spacing (was 350, then 200) - 200 unit gap from tier 2
};

// Helper function for centering even number of nodes with gap in middle
const getNodeXCentered = (index, totalNodes) => {
  // Start position calculated so Finance (index 4) is centered at x:0
  const startX = -400;
  return startX + (index * LAYOUT_CONFIG.AGENT_SPACING);
};

// Calculate dynamic group container dimensions based on node spacing
const GROUP_WIDTH = LAYOUT_CONFIG.AGENT_SPACING * 9 + 30;  // 9 nodes + padding
const GROUP_X = 0;  // Centered at x=0 (same as Plus AI node) with nodeOrigin=[0.5, 0.5]

// Group nodes for visual containers (must be defined before child nodes)
const groupNodes = [
  {
    id: 'sub-agents-group',
    type: 'group',
    position: { x: GROUP_X, y: 60 },  // Adjusted for nodeOrigin=[0.5, 0.5]
    style: {
      width: GROUP_WIDTH,
      height: 140,
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
      backdropFilter: 'blur(16px) saturate(120%)',
      WebkitBackdropFilter: 'blur(16px) saturate(120%)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: 16,
      boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.2)',
      zIndex: -1
    },
    data: {
      label: 'SUB-AGENTS'
    },
    draggable: false,
    selectable: false,
    focusable: false
  },
  {
    id: 'mcp-tools-group',
    type: 'group',
    position: { x: GROUP_X, y: 260 },  // Adjusted for nodeOrigin=[0.5, 0.5]
    style: {
      width: GROUP_WIDTH,
      height: 140,
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
      backdropFilter: 'blur(16px) saturate(120%)',
      WebkitBackdropFilter: 'blur(16px) saturate(120%)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: 16,
      boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.2)',
      zIndex: -1
    },
    data: {
      label: 'ERP SERVICES'
    },
    draggable: false,
    selectable: false,
    focusable: false
  }
];

// Tier 1: Core system nodes (centered layout)
const tier1Nodes = [
  {
    id: 'user',
    type: 'customBidirectional',
    position: { x: -165, y: LAYOUT_CONFIG.TIER_1_Y },  // Moderate distance from AI Agent
    data: {
      label: 'User',
      tier: 1,
      icon: 'user',
      nodeType: 'user'
    }
  },
  {
    id: 'orchestrator',
    type: 'customBidirectional',
    position: { x: 0, y: LAYOUT_CONFIG.TIER_1_Y },  // Centered
    data: {
      label: 'Plus AI',
      tier: 1,
      icon: '🤖',
      nodeType: 'orchestrator'
    }
  },
  {
    id: 'usercontext',
    type: 'customBidirectional',
    position: { x: 165, y: LAYOUT_CONFIG.TIER_1_Y },  // Moderate distance from AI Agent
    data: {
      label: 'Digital Twin',
      tier: 1,
      icon: 'context',
      nodeType: 'context'
    }
  }
];

// Tier 2: Individual agent nodes (dynamically positioned)
const agentNodes = [
  {
    id: 'knowledge',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(0, 9), y: LAYOUT_CONFIG.TIER_2_Y },
    data: {
      label: 'Knowledge',
      tier: 2,
      color: COLORS.KNOWLEDGE_PURPLE,
      icon: 'knowledge',
      nodeType: 'agent'
    }
  },
  {
    id: 'mytask',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(1, 9), y: LAYOUT_CONFIG.TIER_2_Y },
    data: {
      label: 'MyTask',
      tier: 2,
      color: COLORS.MYTASK_ORANGE,
      icon: 'mytask',
      nodeType: 'agent'
    }
  },
  {
    id: 'leave',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(2, 9), y: LAYOUT_CONFIG.TIER_2_Y },
    data: {
      label: 'Leave',
      tier: 2,
      color: COLORS.LEAVE_CYAN,
      icon: 'leave',
      nodeType: 'agent'
    }
  },
  {
    id: 'analytics',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(3, 9), y: LAYOUT_CONFIG.TIER_2_Y },
    data: {
      label: 'Analytics',
      tier: 2,
      color: COLORS.ANALYTICS_GREEN,
      icon: 'analytics',
      nodeType: 'agent'
    }
  },
  {
    id: 'finance',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(4, 9), y: LAYOUT_CONFIG.TIER_2_Y },
    data: {
      label: 'Finance',
      tier: 2,
      color: COLORS.FINANCE_STEEL,
      icon: 'finance',
      nodeType: 'agent'
    }
  },
  {
    id: 'workrequest',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(5, 9), y: LAYOUT_CONFIG.TIER_2_Y },
    data: {
      label: 'WorkReq',
      tier: 2,
      color: COLORS.WORKREQUEST_YELLOW,
      icon: 'workrequest',
      nodeType: 'agent'
    }
  },
  {
    id: 'requisition',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(6, 9), y: LAYOUT_CONFIG.TIER_2_Y },
    data: {
      label: 'Requisition',
      tier: 2,
      color: COLORS.REQUISITION_GOLD,
      icon: 'requisition',
      nodeType: 'agent'
    }
  },
  {
    id: 'recruitment',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(7, 9), y: LAYOUT_CONFIG.TIER_2_Y },
    data: {
      label: 'Recruitment',
      tier: 2,
      color: COLORS.RECRUITMENT_INDIGO,
      icon: 'recruitment',
      nodeType: 'agent'
    }
  },
  {
    id: 'email',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(8, 9), y: LAYOUT_CONFIG.TIER_2_Y },
    data: {
      label: 'Email',
      tier: 2,
      color: COLORS.EMAIL_RED,
      icon: 'email',
      nodeType: 'agent'
    }
  }
];

// Tier 3: Individual tool nodes (dynamically positioned, aligned with agents)
const toolNodes = [
  {
    id: 'knowledge-tool',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(0, 9), y: LAYOUT_CONFIG.TIER_3_Y },
    data: {
      label: 'LG, SM, Employee',
      fullName: 'DXP API',
      tier: 3,
      nodeType: 'tool'
    }
  },
  {
    id: 'mytask-tool',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(1, 9), y: LAYOUT_CONFIG.TIER_3_Y },
    data: {
      label: 'App Builder',
      fullName: 'CiA Services',
      tier: 3,
      nodeType: 'tool'
    }
  },
  {
    id: 'leave-tool',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(2, 9), y: LAYOUT_CONFIG.TIER_3_Y },
    data: {
      label: 'Leave Management',
      fullName: 'CiA Services',
      tier: 3,
      nodeType: 'tool'
    }
  },
  {
    id: 'analytics-tool',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(3, 9), y: LAYOUT_CONFIG.TIER_3_Y },
    data: {
      label: 'Corporate Performance',
      fullName: 'CiA Services',
      tier: 3,
      nodeType: 'tool'
    }
  },
  {
    id: 'finance-tool',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(4, 9), y: LAYOUT_CONFIG.TIER_3_Y },
    data: {
      label: 'Finance System',
      fullName: 'CiA Services',
      tier: 3,
      nodeType: 'tool'
    }
  },
  {
    id: 'workrequest-tool',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(5, 9), y: LAYOUT_CONFIG.TIER_3_Y },
    data: {
      label: 'Enterprise Asset',
      fullName: 'CiA Services',
      tier: 3,
      nodeType: 'tool'
    }
  },
  {
    id: 'requisition-tool',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(6, 9), y: LAYOUT_CONFIG.TIER_3_Y },
    data: {
      label: 'Supply Chain Management',
      fullName: 'CiA Services',
      tier: 3,
      nodeType: 'tool'
    }
  },
  {
    id: 'recruitment-tool',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(7, 9), y: LAYOUT_CONFIG.TIER_3_Y },
    data: {
      label: 'HR & Payroll',
      fullName: 'CiA Services',
      tier: 3,
      nodeType: 'tool'
    }
  },
  {
    id: 'email-tool',
    type: 'customBidirectional',
    position: { x: getNodeXCentered(8, 9), y: LAYOUT_CONFIG.TIER_3_Y },
    data: {
      label: 'Email System',
      fullName: 'Email System',
      tier: 3,
      nodeType: 'tool'
    }
  }
];

// Combine all nodes (group nodes first to render behind)
export const initialNodes = [
  ...groupNodes,
  ...tier1Nodes,
  ...agentNodes,
  ...toolNodes
];

// Edge creation helper for custom directional edges
const createDirectionalEdge = (source, target, sourceHandle, targetHandle, id) => ({
  id,
  source,
  target,
  sourceHandle,
  targetHandle,
  type: 'custom', // Use custom edge type
  animated: false,
  hidden: false,
  data: {
    direction: 'none', // Will be dynamically set: 'forward', 'reverse', 'bidirectional', or 'none'
    color: COLORS.EDGE_DEFAULT
  },
  style: {
    ...EDGE_STYLES.DEFAULT
  }
});

// Tier 1 single edges (bidirectional capability)
const tier1Edges = [
  createDirectionalEdge('user', 'orchestrator', 'source-right', 'target-left', 'user-orchestrator'),
  createDirectionalEdge('orchestrator', 'usercontext', 'source-right', 'target-left', 'orchestrator-usercontext')
];

// Plus AI to all agents single edges (bidirectional capability)
const orchestratorToAgentEdges = [];
agentNodes.forEach(agent => {
  orchestratorToAgentEdges.push(
    createDirectionalEdge('orchestrator', agent.id, 'source-bottom', 'target-top', `orchestrator-${agent.id}`)
  );
});

// Agent to tool single edges (bidirectional capability)
const agentToToolEdges = [];
agentNodes.forEach(agent => {
  const toolId = `${agent.id}-tool`;
  agentToToolEdges.push(
    createDirectionalEdge(agent.id, toolId, 'source-bottom', 'target-top', `${agent.id}-${toolId}`)
  );
});

// Combine all edges
export const initialEdges = [
  ...tier1Edges,
  ...orchestratorToAgentEdges,
  ...agentToToolEdges
];