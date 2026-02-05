// Plus Visual Frontend Constants
// Cleaned up version with only used constants

// Node IDs for agent nodes (legacy - keeping for reference)
export const AGENT_NODE_IDS = [
  'mytask',
  'workrequest',
  'analytics',
  'requisition',
  'recruitment',
  'leave',
  'email',
  'knowledge'
];

// UK Showcase Agent IDs
export const STUDENT_AGENT_IDS = ['StudentManagement', 'Knowledge'];
export const RESIDENT_AGENT_IDS = ['bincollections', 'communityevents', 'request', 'spatial', 'taxtransactions'];

export function getAgentIdsForGuide(guideType) {
  return guideType === 'student' ? STUDENT_AGENT_IDS : RESIDENT_AGENT_IDS;
}

// React Flow configuration
export const REACT_FLOW_CONFIG = {
  MIN_ZOOM: 0.5,
  MAX_ZOOM: 2,
  DEFAULT_VIEWPORT: { x: 0, y: 0, zoom: 1 },
  NODES_DRAGGABLE: false,
  NODES_CONNECTABLE: false,
  ELEMENTS_SELECTABLE: true,
  SNAP_TO_GRID: false
};

// Camera animation configuration for auto-tracking
export const CAMERA_ANIMATION_CONFIG = {
  // Zoom levels for different phases
  ZOOM_LEVELS: {
    OVERVIEW: 0.85,      // Full dashboard view
    FOCUSED_VIEW: 2.2    // Focused view for single/dual nodes and details
  },

  // Animation durations (ms)
  DURATIONS: {
    QUICK: 400,
    NORMAL: 700,
    SMOOTH: 1000,
    SLOW: 1200
  },

  // Node positions - define them here directly for camera tracking
  NODE_POSITIONS: {
    // Tier 1
    user: { x: -165, y: -140 },
    orchestrator: { x: 0, y: -140 },
    usercontext: { x: 165, y: -140 },
    // Tier 2 - Agents (9 nodes, Finance centered at x=0, aligned with Plus AI)
    knowledge: { x: -400, y: 60 },
    mytask: { x: -300, y: 60 },
    leave: { x: -200, y: 60 },
    analytics: { x: -100, y: 60 },
    finance: { x: 0, y: 60 },
    workrequest: { x: 100, y: 60 },
    requisition: { x: 200, y: 60 },
    recruitment: { x: 300, y: 60 },
    email: { x: 400, y: 60 },
    // Student Guide agents
    StudentManagement: { x: -100, y: 60 },
    Knowledge: { x: 100, y: 60 },
    // Resident Guide agents
    bincollections: { x: -300, y: 60 },
    request: { x: -150, y: 60 },
    spatial: { x: 0, y: 60 },
    taxtransactions: { x: 150, y: 60 },
    communityevents: { x: 300, y: 60 },
    // Tier 3 - Tools (same x as agents, different y)
    'knowledge-tool': { x: -400, y: 260 },
    'mytask-tool': { x: -300, y: 260 },
    'leave-tool': { x: -200, y: 260 },
    'analytics-tool': { x: -100, y: 260 },
    'finance-tool': { x: 0, y: 260 },
    'workrequest-tool': { x: 100, y: 260 },
    'requisition-tool': { x: 200, y: 260 },
    'recruitment-tool': { x: 300, y: 260 },
    'email-tool': { x: 400, y: 260 },
    // Student Guide tools
    'StudentManagement-tool': { x: -100, y: 260 },
    'Knowledge-tool': { x: 100, y: 260 },
    // Resident Guide tools
    'bincollections-tool': { x: -300, y: 260 },
    'request-tool': { x: -150, y: 260 },
    'spatial-tool': { x: 0, y: 260 },
    'taxtransactions-tool': { x: 150, y: 260 },
    'communityevents-tool': { x: 300, y: 260 }
  }
};