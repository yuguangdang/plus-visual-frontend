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
// Student: Order matches new structure - VLE(LMS), KB(Knowledge), SM, Curriculum(CourseLoop), Tasks, Planner(StudyPlanner)
export const STUDENT_AGENT_IDS = ['LMS', 'Knowledge', 'StudentManagement', 'CourseLoop', 'Tasks', 'StudyPlanner'];
export const RESIDENT_AGENT_IDS = ['knowledge', 'ecm', 'request', 'spatial', 'webagent', 'bincollections', 'taxtransactions'];

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

  // Node positions - must match IndividualNodesData.js for camera tracking
  // Use getNodePositionsForGuide() function below for guide-specific positions
  NODE_POSITIONS: {} // Placeholder - use getNodePositionsForGuide()
};

// Student Guide node positions (6 agents, 150px spacing with small gap between groups)
// New order: VLE(LMS), KB(Knowledge), SM, Curriculum(CourseLoop), Tasks, Planner(StudyPlanner)
const STUDENT_NODE_POSITIONS = {
  // Tier 1 (centered above 6 agents, 225px spacing like Resident Guide)
  user: { x: -75, y: -140 },
  orchestrator: { x: 150, y: -140 },
  usercontext: { x: 375, y: -140 },
  // Tier 2 Agents - New order: VLE, KB | SM, Curriculum, Tasks, Planner (small gap between groups)
  LMS: { x: -225, y: 60 },             // VLE (Uni Services)
  Knowledge: { x: -75, y: 60 },        // KB (Uni Services)
  StudentManagement: { x: 75, y: 60 }, // SM (ERP Services)
  CourseLoop: { x: 225, y: 60 },       // Curriculum (ERP Services)
  Tasks: { x: 375, y: 60 },            // Tasks (ERP Services)
  StudyPlanner: { x: 525, y: 60 },     // Planner (ERP Services)
  // Tier 3 Tools
  'LMS-tool': { x: -225, y: 260 },
  'Knowledge-tool': { x: -75, y: 260 },
  'StudentManagement-tool': { x: 75, y: 260 },
  'CourseLoop-tool': { x: 225, y: 260 },
  'Tasks-tool': { x: 375, y: 260 },
  'StudyPlanner-tool': { x: 525, y: 260 }
};

// Resident Guide node positions - aligned with IndividualNodesData.js
const RESIDENT_NODE_POSITIONS = {
  // Tier 1
  user: { x: 0, y: -140 },
  orchestrator: { x: 225, y: -140 },
  usercontext: { x: 450, y: -140 },
  // Tier 2 Agents (ERP: knowledge, ecm, request, spatial | External: webagent, bincollections, taxtransactions)
  knowledge: { x: -225, y: 60 },
  ecm: { x: -75, y: 60 },
  request: { x: 75, y: 60 },
  spatial: { x: 225, y: 60 },
  webagent: { x: 375, y: 60 },
  bincollections: { x: 525, y: 60 },
  taxtransactions: { x: 675, y: 60 },
  // Tier 3 Tools
  'knowledge-tool': { x: -225, y: 260 },
  'ecm-tool': { x: -75, y: 260 },
  'request-tool': { x: 75, y: 260 },
  'spatial-tool': { x: 225, y: 260 },
  'webagent-tool': { x: 375, y: 260 },
  'bincollections-tool': { x: 525, y: 260 },
  'taxtransactions-tool': { x: 675, y: 260 }
};

// Function to get node positions for a specific guide type
export function getNodePositionsForGuide(guideType) {
  return guideType === 'student' ? STUDENT_NODE_POSITIONS : RESIDENT_NODE_POSITIONS;
}