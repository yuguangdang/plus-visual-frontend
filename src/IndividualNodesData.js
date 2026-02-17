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
const getNodeXCentered = (index) => {
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

// UK Showcase: Function to get nodes and edges by guide type
export function getNodesAndEdges(guideType) {
  if (guideType === 'student') {
    return getStudentGuideNodesAndEdges();
  }
  return getResidentGuideNodesAndEdges();
}

// Student Guide Configuration (2 agents)
function getStudentGuideNodesAndEdges() {
  const studentAgents = [
    { id: 'StudentManagement', label: 'SM Agent', color: COLORS.STUDENTMANAGEMENT_TEAL, x: -100 },
    { id: 'Knowledge', label: 'KB Agent', color: COLORS.KNOWLEDGE_PURPLE, x: 100 }
  ];

  const tier1 = [
    {
      id: 'user',
      type: 'customBidirectional',
      position: { x: -165, y: LAYOUT_CONFIG.TIER_1_Y },
      data: { label: 'User', tier: 1, icon: 'user', nodeType: 'user' }
    },
    {
      id: 'orchestrator',
      type: 'customBidirectional',
      position: { x: 0, y: LAYOUT_CONFIG.TIER_1_Y },
      data: { label: 'Student Guide', tier: 1, icon: 'orchestrator', nodeType: 'orchestrator' }
    },
    {
      id: 'usercontext',
      type: 'customBidirectional',
      position: { x: 165, y: LAYOUT_CONFIG.TIER_1_Y },
      data: { label: 'Digital Twin', tier: 1, icon: 'context', nodeType: 'usercontext' }
    }
  ];

  const agentNodesStudent = studentAgents.map(agent => ({
    id: agent.id,
    type: 'customBidirectional',
    position: { x: agent.x, y: LAYOUT_CONFIG.TIER_2_Y },
    data: {
      label: agent.label,
      tier: 2,
      icon: agent.id,
      color: agent.color,
      nodeType: 'agent'
    }
  }));

  const toolNodesStudent = studentAgents.map(agent => {
    // Determine icon and label based on agent type
    let icon, label;
    if (agent.id === 'StudentManagement') {
      icon = 'SC25_PLUS_CiA';
      label = 'Student Management';
    } else if (agent.id === 'Knowledge') {
      icon = 'SC25_PLUS_DXP';
      label = 'Knowledge Base';
    } else {
      icon = 'tool';
      label = 'Tools';
    }

    return {
      id: `${agent.id}-tool`,
      type: 'customBidirectional',
      position: { x: agent.x, y: LAYOUT_CONFIG.TIER_3_Y },
      data: {
        label: label,
        fullName: label,
        tier: 3,
        icon: icon,
        color: agent.color,
        nodeType: 'tool',
        parentAgent: agent.id
      }
    };
  });

  // Calculate dynamic container width based on agent positions
  const agentXPositions = studentAgents.map(a => a.x);
  const minX = Math.min(...agentXPositions);
  const maxX = Math.max(...agentXPositions);
  const containerWidth = (maxX - minX) + 140; // Add 70px padding on each side (node width)

  const groupNodesStudent = [
    {
      id: 'sub-agents-group',
      type: 'group',
      position: { x: 0, y: 60 },
      style: {
        width: containerWidth,
        height: 140,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
        backdropFilter: 'blur(16px) saturate(120%)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: 16,
        zIndex: -1
      },
      data: { label: 'SUB-AGENTS' }
    },
    {
      id: 'mcp-tools-group',
      type: 'group',
      position: { x: 0, y: 250 },
      style: {
        width: containerWidth,
        height: 130,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
        backdropFilter: 'blur(12px) saturate(110%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: 16,
        zIndex: -1
      },
      data: { label: 'ERP SERVICES' }
    }
  ];

  const nodes = [...groupNodesStudent, ...tier1, ...agentNodesStudent, ...toolNodesStudent];

  const tier1EdgesStudent = [
    createDirectionalEdge('user', 'orchestrator', 'source-right', 'target-left', 'user-orchestrator'),
    createDirectionalEdge('orchestrator', 'usercontext', 'source-right', 'target-left', 'orchestrator-usercontext')
  ];

  const orchestratorToAgentEdgesStudent = studentAgents.map(agent =>
    createDirectionalEdge('orchestrator', agent.id, 'source-bottom', 'target-top', `orchestrator-${agent.id}`)
  );

  const agentToToolEdgesStudent = studentAgents.map(agent =>
    createDirectionalEdge(agent.id, `${agent.id}-tool`, 'source-bottom', 'target-top', `${agent.id}-${agent.id}-tool`)
  );

  const edges = [...tier1EdgesStudent, ...orchestratorToAgentEdgesStudent, ...agentToToolEdgesStudent];

  return { nodes, edges };
}

// Resident Guide Configuration (7 agents) - Aligned with Presenter Spreadsheet
function getResidentGuideNodesAndEdges() {
  // ERP SERVICES agents (internal systems) - 4 agents
  const erpAgents = [
    { id: 'knowledge', label: 'Knowledge', color: COLORS.KNOWLEDGE_RESIDENT_PURPLE, x: -225 },
    { id: 'ecm', label: 'ECM', color: COLORS.ECM_ORANGE, x: -75 },
    { id: 'request', label: 'WorkReq', color: COLORS.REQUEST_AMBER, x: 75 },
    { id: 'spatial', label: 'Spatial', color: COLORS.SPATIAL_INDIGO, x: 225 }
  ];

  // EXTERNAL agents (third party systems) - 3 agents
  const externalAgents = [
    { id: 'webagent', label: 'Web Agent', color: COLORS.WEBAGENT_GOLD, x: 375 },
    { id: 'bincollections', label: 'Bins', color: COLORS.BINCOLLECTIONS_GREEN, x: 525 },
    { id: 'taxtransactions', label: 'Council Tax', color: COLORS.TAXTRANSACTIONS_STEEL, x: 675 }
  ];

  // Combined agents array
  const residentAgents = [...erpAgents, ...externalAgents];

  const tier1 = [
    {
      id: 'user',
      type: 'customBidirectional',
      position: { x: 0, y: LAYOUT_CONFIG.TIER_1_Y },
      data: { label: 'User', tier: 1, icon: 'user', nodeType: 'user' }
    },
    {
      id: 'orchestrator',
      type: 'customBidirectional',
      position: { x: 225, y: LAYOUT_CONFIG.TIER_1_Y },
      data: { label: 'Resident Guide', tier: 1, icon: 'orchestrator', nodeType: 'orchestrator' }
    },
    {
      id: 'usercontext',
      type: 'customBidirectional',
      position: { x: 450, y: LAYOUT_CONFIG.TIER_1_Y },
      data: { label: 'Digital Twin', tier: 1, icon: 'context', nodeType: 'usercontext' }
    }
  ];

  const agentNodesResident = residentAgents.map(agent => ({
    id: agent.id,
    type: 'customBidirectional',
    position: { x: agent.x, y: LAYOUT_CONFIG.TIER_2_Y },
    data: {
      label: agent.label,
      tier: 2,
      icon: agent.id,
      color: agent.color,
      nodeType: 'agent'
    }
  }));

  const toolNodesResident = residentAgents.map(agent => {
    // Determine icon and label based on agent type - aligned with spreadsheet
    let icon, label;
    if (agent.id === 'knowledge') {
      icon = 'SC25_PLUS_DXP';
      label = 'Knowledge Base';
    } else if (agent.id === 'ecm') {
      icon = 'SC25_PLUS_CiA';
      label = 'Content Mgmt';
    } else if (agent.id === 'request') {
      icon = 'SC25_PLUS_CiA';
      label = 'Request Mgmt';
    } else if (agent.id === 'spatial') {
      icon = 'SC25_PLUS_CiA';
      label = 'Spatial';
    } else if (agent.id === 'webagent') {
      icon = 'SC25_PLUS_3rdParty';
      label = 'Web Search';
    } else if (agent.id === 'bincollections') {
      icon = 'SC25_PLUS_WasteSystem';
      label = 'Waste System';
    } else if (agent.id === 'taxtransactions') {
      icon = 'SC25_PLUS_RevsBens';
      label = 'Revs & Bens';
    } else {
      icon = 'tool';
      label = 'Tools';
    }

    return {
      id: `${agent.id}-tool`,
      type: 'customBidirectional',
      position: { x: agent.x, y: LAYOUT_CONFIG.TIER_3_Y },
      data: {
        label: label,
        fullName: label,
        tier: 3,
        icon: icon,
        color: agent.color,
        nodeType: 'tool',
        parentAgent: agent.id
      }
    };
  });

  // Calculate dynamic container width based on all agent positions
  const residentXPositions = residentAgents.map(a => a.x);
  const residentMinX = Math.min(...residentXPositions);
  const residentMaxX = Math.max(...residentXPositions);
  const residentContainerWidth = (residentMaxX - residentMinX) + 140; // Add 70px padding on each side
  const residentContainerCenter = (residentMinX + residentMaxX) / 2;

  // ERP Services container (first 4 agents: knowledge, ecm, request, spatial)
  const erpXPositions = erpAgents.map(a => a.x);
  const erpMinX = Math.min(...erpXPositions); // -225
  const erpMaxX = Math.max(...erpXPositions); // 225
  const erpContainerWidth = (erpMaxX - erpMinX) + 140; // 450 + 140 = 590
  const erpContainerCenter = (erpMinX + erpMaxX) / 2; // 0

  // External container (last 3 agents: webagent, bincollections, taxtransactions)
  const externalXPositions = externalAgents.map(a => a.x);
  const externalMinX = Math.min(...externalXPositions); // 375
  const externalMaxX = Math.max(...externalXPositions); // 675
  const externalContainerWidth = (externalMaxX - externalMinX) + 140; // 300 + 140 = 440
  const externalContainerCenter = (externalMinX + externalMaxX) / 2; // 525

  const groupNodesResident = [
    {
      id: 'sub-agents-group',
      type: 'group',
      position: { x: residentContainerCenter, y: 60 },
      style: {
        width: residentContainerWidth,
        height: 140,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
        backdropFilter: 'blur(16px) saturate(120%)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: 16,
        zIndex: -1
      },
      data: { label: 'SUB-AGENTS' }
    },
    {
      id: 'erp-services-group',
      type: 'group',
      position: { x: erpContainerCenter, y: 250 },
      style: {
        width: erpContainerWidth,
        height: 130,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
        backdropFilter: 'blur(12px) saturate(110%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: 16,
        zIndex: -1
      },
      data: { label: 'ERP SERVICES' }
    },
    {
      id: 'external-group',
      type: 'group',
      position: { x: externalContainerCenter, y: 250 },
      style: {
        width: externalContainerWidth,
        height: 130,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
        backdropFilter: 'blur(12px) saturate(110%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: 16,
        zIndex: -1
      },
      data: { label: 'EXTERNAL' }
    }
  ];

  const nodes = [...groupNodesResident, ...tier1, ...agentNodesResident, ...toolNodesResident];

  const tier1EdgesResident = [
    createDirectionalEdge('user', 'orchestrator', 'source-right', 'target-left', 'user-orchestrator'),
    createDirectionalEdge('orchestrator', 'usercontext', 'source-right', 'target-left', 'orchestrator-usercontext')
  ];

  const orchestratorToAgentEdgesResident = residentAgents.map(agent =>
    createDirectionalEdge('orchestrator', agent.id, 'source-bottom', 'target-top', `orchestrator-${agent.id}`)
  );

  const agentToToolEdgesResident = residentAgents.map(agent =>
    createDirectionalEdge(agent.id, `${agent.id}-tool`, 'source-bottom', 'target-top', `${agent.id}-${agent.id}-tool`)
  );

  const edges = [...tier1EdgesResident, ...orchestratorToAgentEdgesResident, ...agentToToolEdgesResident];

  return { nodes, edges };
}