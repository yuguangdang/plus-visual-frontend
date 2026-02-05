// Plus AI Visualizer - Centralized Color Constants
// Makes it easy to update colors across the entire dashboard

// Base color palette - muted, professional colors
const COLOR_PALETTE = {
  DARK_BLUE: '#1e40af',
  DARK_PURPLE: '#6b21a8',
  DARK_SLATE: '#334155',
  DARK_ORANGE: '#c2410c',
  DARK_AMBER: '#a16207',
  DARK_GREEN: '#047857',
  DARK_GOLD: '#b45309',
  DARK_INDIGO: '#4338ca',
  DARK_CYAN: '#0e7490',
  DARK_BROWN: '#7c2d12',
  MEDIUM_PURPLE: '#7c3aed',
  DARK_YELLOW: '#ca8a04',
  MEDIUM_SLATE: '#64748b',
  LIGHT_SLATE: '#8b9dc3',
  ACTIVE_PURPLE: '#8434ed',
  DARK_TEAL: '#0f766e',      // New distinct teal color for MyTask
  DARK_ROSE: '#be185d',       // Rose color for User Context
  DARK_STEEL: '#0369a1'       // Steel blue for Finance
};

export const COLORS = {
  // Tier 1 - Core System Nodes
  USER_BLUE: COLOR_PALETTE.DARK_BLUE,           // User Request node
  ORCHESTRATOR_PURPLE: COLOR_PALETTE.DARK_PURPLE, // Plus AI Orchestrator
  USER_CONTEXT_PINK: COLOR_PALETTE.DARK_ROSE,    // User Context (rose color)

  // Tier 2 - Agent Nodes (Legacy)
  MYTASK_ORANGE: COLOR_PALETTE.DARK_TEAL,         // MyTask Agent (teal)
  WORKREQUEST_YELLOW: COLOR_PALETTE.DARK_AMBER,   // WorkRequest Agent
  ANALYTICS_GREEN: COLOR_PALETTE.DARK_GREEN,      // Analytics Agent
  FINANCE_STEEL: COLOR_PALETTE.DARK_STEEL,        // Finance Agent
  REQUISITION_GOLD: COLOR_PALETTE.DARK_GOLD,      // Requisition Agent
  RECRUITMENT_INDIGO: COLOR_PALETTE.DARK_INDIGO,  // Recruitment Agent
  LEAVE_CYAN: COLOR_PALETTE.DARK_CYAN,            // Leave Agent
  EMAIL_RED: COLOR_PALETTE.DARK_BROWN,            // Email Agent
  KNOWLEDGE_PURPLE: COLOR_PALETTE.MEDIUM_PURPLE,  // Knowledge Agent

  // UK Showcase - Student Guide Agents
  STUDENTMANAGEMENT_TEAL: COLOR_PALETTE.DARK_TEAL,  // Student Management

  // UK Showcase - Resident Guide Agents
  BINCOLLECTIONS_GREEN: COLOR_PALETTE.DARK_GREEN,     // Bin Collections
  COMMUNITYEVENTS_CYAN: COLOR_PALETTE.DARK_CYAN,      // Community Events
  REQUEST_AMBER: COLOR_PALETTE.DARK_AMBER,            // Request Management
  SPATIAL_INDIGO: COLOR_PALETTE.DARK_INDIGO,          // Spatial
  TAXTRANSACTIONS_STEEL: COLOR_PALETTE.DARK_STEEL,    // Council Tax

  // Tier 3 - Tool Nodes
  TOOLS_GRAY: COLOR_PALETTE.MEDIUM_SLATE,         // Legacy gray
  TOOLS_YELLOW: COLOR_PALETTE.DARK_YELLOW,        // CiA Services
  TOOLS_PURPLE: COLOR_PALETTE.MEDIUM_PURPLE,      // DXP API
  TOOLS_BLUE: COLOR_PALETTE.DARK_BLUE,            // Utility Tools
  
  // Edge Colors - More visible for better contrast
  EDGE_DEFAULT: 'rgba(255, 255, 255, 0.4)',        // Default edge color
  EDGE_ACTIVE_PURPLE: 'rgba(147, 51, 234, 0.9)',   // User → Orchestrator
  EDGE_ACTIVE_PINK: 'rgba(236, 72, 153, 0.9)',     // Orchestrator → User Context
  EDGE_ACTIVE_GREEN: 'rgba(147, 51, 234, 0.95)',   // General active color
  EDGE_ACTIVE_TOOL: 'rgba(59, 130, 246, 0.8)',     // Agents → Tools

  // Animation States
  PROCESSING_GLOW: 'rgba(132, 52, 237, 0.3)',      // Processing state glow
  ACTIVE_HIGHLIGHT: 'rgba(132, 52, 237, 0.2)',     // Active state highlight
};

// Edge Style Presets
export const EDGE_STYLES = {
  DEFAULT: {
    strokeWidth: 2,
    stroke: 'rgba(255, 255, 255, 0.35)',
    opacity: 0.8,
    filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.2))'
  },
  ANIMATED: {
    strokeWidth: 3,
    stroke: 'rgba(147, 51, 234, 0.9)',
    opacity: 1,
    filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.7))'
  }
};
