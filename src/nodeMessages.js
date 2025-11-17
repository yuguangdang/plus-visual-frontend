// Simplified message pools for random display

// Agent-specific message pools - combine all messages into one array per agent
export const AGENT_MESSAGES = {
  mytask: [
    "Analyzing workflow...",
    "Checking priorities...",
    "Processing task data...",
    "Checking tasks...",
    "Loading assignments...",
    "Reviewing approvals...",
    "Accessing task system...",
    "Updating records...",
    "Processing actions...",
    "Validating permissions...",
    "Fetching task details..."
  ],

  knowledge: [
    "Searching knowledge base...",
    "Accessing documents...",
    "Loading policies...",
    "Analyzing information...",
    "Finding relevant data...",
    "Processing knowledge...",
    "Querying database...",
    "Retrieving documents...",
    "Fetching insights...",
    "Scanning archives...",
    "Cross-referencing data..."
  ],

  leave: [
    "Checking leave requests...",
    "Loading balances...",
    "Reviewing calendar...",
    "Analyzing availability...",
    "Checking conflicts...",
    "Processing leave data...",
    "Accessing leave system...",
    "Updating balances...",
    "Processing request...",
    "Verifying eligibility...",
    "Calculating allowances..."
  ],

  analytics: [
    "Loading metrics...",
    "Gathering data...",
    "Accessing reports...",
    "Analyzing patterns...",
    "Processing statistics...",
    "Running queries...",
    "Building visualizations...",
    "Exporting data...",
    "Computing aggregates...",
    "Generating insights...",
    "Analyzing trends..."
  ],

  finance: [
    "Analyzing budgets...",
    "Processing transactions...",
    "Checking accounts...",
    "Reviewing expenses...",
    "Calculating costs...",
    "Accessing financial data...",
    "Loading balance sheets...",
    "Validating entries...",
    "Generating reports...",
    "Auditing records...",
    "Processing payments..."
  ],

  workrequest: [
    "Loading work orders...",
    "Checking requests...",
    "Reviewing tickets...",
    "Analyzing request...",
    "Checking resources...",
    "Processing work data...",
    "Creating ticket...",
    "Updating status...",
    "Assigning resources...",
    "Validating requirements...",
    "Scheduling tasks..."
  ],

  requisition: [
    "Loading requisitions...",
    "Checking inventory...",
    "Reviewing budgets...",
    "Analyzing requirements...",
    "Checking availability...",
    "Processing order data...",
    "Submitting order...",
    "Updating inventory...",
    "Processing purchase...",
    "Verifying approvals...",
    "Calculating costs..."
  ],

  recruitment: [
    "Loading positions...",
    "Checking applications...",
    "Reviewing candidates...",
    "Analyzing profiles...",
    "Evaluating qualifications...",
    "Processing candidates...",
    "Updating status...",
    "Scheduling interviews...",
    "Processing applications...",
    "Matching skills...",
    "Ranking applicants..."
  ],

  email: [
    "Loading templates...",
    "Checking recipients...",
    "Preparing draft...",
    "Composing message...",
    "Formatting content...",
    "Processing email data...",
    "Sending email...",
    "Updating status...",
    "Confirming delivery...",
    "Adding attachments...",
    "Validating addresses..."
  ]
};

// Universal tool messages - apply to all tools
export const TOOL_MESSAGES = [
  "Calling MCP tools...",
  "Executing API request...",
  "Fetching data...",
  "Processing request...",
  "Running query...",
  "Accessing database...",
  "Loading results...",
  "Retrieving information...",
  "Validating response...",
  "Parsing data...",
  "Establishing connection...",
  "Authenticating...",
  "Streaming results...",
  "Caching response...",
  "Transforming data..."
];

// Orchestrator messages
export const ORCHESTRATOR_MESSAGES = [
  "Analyzing request...",
  "Understanding intent...",
  "Planning approach...",
  "Coordinating agents...",
  "Processing responses...",
  "Synthesizing results...",
  "Routing request...",
  "Managing workflow...",
  "Optimizing strategy...",
  "Validating results..."
];

// Helper function to get a random message for a node
export function getRandomMessage(nodeId) {
  // For tools
  if (nodeId.includes('-tool')) {
    return TOOL_MESSAGES[Math.floor(Math.random() * TOOL_MESSAGES.length)];
  }

  // For orchestrator
  if (nodeId === 'orchestrator') {
    return ORCHESTRATOR_MESSAGES[Math.floor(Math.random() * ORCHESTRATOR_MESSAGES.length)];
  }

  // For agents - use specific agent messages if available
  if (AGENT_MESSAGES[nodeId]) {
    const messages = AGENT_MESSAGES[nodeId];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Fallback - shouldn't happen but just in case
  return "Processing...";
}