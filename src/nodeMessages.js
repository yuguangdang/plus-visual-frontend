// Simplified message pools for random display
// Aligned with ANZ Showcase Prompts PDF scenarios

// Agent-specific message pools - combine all messages into one array per agent
export const AGENT_MESSAGES = {
  // ========================================
  // GENERIC AGENT MESSAGES (Fallback)
  // ========================================
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
  ],

  // ========================================
  // INTENTION-SPECIFIC AGENT MESSAGES
  // PDF-Aligned for ANZ Showcase
  // ========================================

  // PDF #1: Critical insight card (leave_view_approvals)
  'mytask:leave_view_approvals': [
    "Loading pending approvals...",
    "Checking leave queue...",
    "Retrieving approval tasks...",
    "Processing leave requests...",
    "Loading task list...",
    "Accessing approval workflow..."
  ],
  'leave:leave_view_approvals': [
    "Accessing leave system...",
    "Loading request details...",
    "Checking employee leave...",
    "Retrieving leave data...",
    "Analyzing leave requests...",
    "Fetching pending requests..."
  ],

  // PDF #2: Check against policy (leave_check_policy)
  'leave:leave_check_policy': [
    "Validating policy compliance...",
    "Checking leave rules...",
    "Analyzing request validity...",
    "Reviewing policy constraints...",
    "Verifying leave eligibility...",
    "Applying policy checks..."
  ],
  'knowledge:leave_check_policy': [
    "Searching policy documents...",
    "Loading leave policies...",
    "Retrieving company guidelines...",
    "Accessing policy database...",
    "Finding relevant policies...",
    "Cross-referencing rules..."
  ],

  // PDF #3: Approve them all (leave_bulk_approve)
  'mytask:leave_bulk_approve': [
    "Processing bulk approval...",
    "Approving all requests...",
    "Updating approval status...",
    "Confirming leave requests...",
    "Finalizing approvals...",
    "Completing batch action..."
  ],

  // PDF #4: Team leave balances chart (leave_team_balances)
  'analytics:leave_team_balances': [
    "Building balance chart...",
    "Generating visualization...",
    "Loading team data...",
    "Creating bar chart...",
    "Analyzing leave balances...",
    "Rendering chart data..."
  ],

  // PDF #5: Generate email about leave (leave_draft_email)
  'email:leave_draft_email': [
    "Drafting leave reminder...",
    "Composing email...",
    "Preparing message...",
    "Formatting email content...",
    "Generating email draft...",
    "Creating leave notification..."
  ],

  // PDF #7: Critical tasks for recruitment (recruitment_view_applications)
  'recruitment:recruitment_view_applications': [
    "Loading applications...",
    "Retrieving requisition data...",
    "Checking open positions...",
    "Processing candidate list...",
    "Accessing recruitment system...",
    "Fetching applicant data..."
  ],

  // PDF #8: Show me Sarah (recruitment_application_summary)
  'recruitment:recruitment_application_summary': [
    "Loading candidate profile...",
    "Retrieving candidate details...",
    "Analyzing qualifications...",
    "Preparing candidate summary...",
    "Accessing application data...",
    "Reviewing resume details..."
  ],

  // PDF #9: Compare candidates (recruitment_compare_candidates)
  'recruitment:recruitment_compare_candidates': [
    "Comparing candidates...",
    "Analyzing all applicants...",
    "Loading comparison data...",
    "Evaluating qualifications...",
    "Processing candidate details...",
    "Building comparison view..."
  ],

  // PDF #10: Move Sarah, others unsuitable (recruitment_move_stage)
  'recruitment:recruitment_move_stage': [
    "Updating candidate stages...",
    "Processing workflow actions...",
    "Moving candidate forward...",
    "Marking others unsuitable...",
    "Finalizing stage changes...",
    "Updating recruitment status..."
  ],
  'mytask:recruitment_move_stage': [
    "Creating workflow tasks...",
    "Processing stage updates...",
    "Generating action items...",
    "Updating task status...",
    "Confirming changes...",
    "Recording workflow actions..."
  ],

  // PDF #11: Interview questions (recruitment_interview_questions)
  'recruitment:recruitment_interview_questions': [
    "Generating questions...",
    "Preparing interview pack...",
    "Creating question set...",
    "Analyzing role requirements...",
    "Building interview guide...",
    "Tailoring questions..."
  ],

  // PDF #12: Email that to me (general_email)
  'email:general_email': [
    "Preparing email...",
    "Formatting content...",
    "Composing message...",
    "Sending via email...",
    "Confirming delivery...",
    "Processing email request..."
  ],

  // Additional intention-specific messages for non-PDF scenarios

  // Leave conflicts check
  'leave:leave_check_conflicts': [
    "Checking calendar conflicts...",
    "Analyzing team schedule...",
    "Finding overlapping leave...",
    "Reviewing team availability...",
    "Detecting schedule clashes...",
    "Validating dates..."
  ],
  'knowledge:leave_check_conflicts': [
    "Loading team calendar...",
    "Accessing scheduling data...",
    "Retrieving conflict rules...",
    "Checking coverage requirements...",
    "Analyzing team coverage...",
    "Cross-referencing schedules..."
  ],

  // Work request creation
  'workrequest:work_request_create': [
    "Creating work request...",
    "Logging issue details...",
    "Submitting maintenance request...",
    "Processing work order...",
    "Assigning ticket number...",
    "Recording request..."
  ],

  // Work request status
  'workrequest:work_request_status': [
    "Checking request status...",
    "Loading work order details...",
    "Retrieving update history...",
    "Tracking progress...",
    "Fetching current status...",
    "Reviewing work history..."
  ],

  // Requisition desk order
  'requisition:requisition_desk': [
    "Processing desk order...",
    "Checking product availability...",
    "Submitting requisition...",
    "Creating purchase request...",
    "Validating order details...",
    "Loading catalog options..."
  ],
  'workrequest:requisition_desk': [
    "Scheduling delivery...",
    "Coordinating installation...",
    "Creating delivery ticket...",
    "Processing logistics...",
    "Arranging setup...",
    "Tracking order..."
  ],

  // Product search
  'requisition:requisition_search_product': [
    "Searching catalog...",
    "Finding products...",
    "Loading search results...",
    "Filtering options...",
    "Checking availability...",
    "Comparing items..."
  ],

  // Finance budget
  'finance:finance_view_budget': [
    "Loading budget data...",
    "Calculating remaining funds...",
    "Analyzing allocations...",
    "Retrieving budget status...",
    "Checking available balance...",
    "Processing budget info..."
  ],

  // Finance expenses
  'finance:finance_check_expenses': [
    "Loading expense data...",
    "Analyzing spending...",
    "Retrieving transactions...",
    "Calculating totals...",
    "Processing expense report...",
    "Reviewing expenditures..."
  ],

  // Finance cost analysis
  'finance:finance_analyze_costs': [
    "Analyzing cost trends...",
    "Processing financial data...",
    "Building trend analysis...",
    "Comparing periods...",
    "Generating insights...",
    "Calculating variances..."
  ],
  'analytics:finance_analyze_costs': [
    "Building cost charts...",
    "Visualizing trends...",
    "Creating analysis graphs...",
    "Processing data points...",
    "Generating visual report...",
    "Rendering analytics..."
  ],

  // Analytics visualization
  'analytics:analytics_visualization': [
    "Building visualization...",
    "Rendering chart data...",
    "Creating visual display...",
    "Processing graph data...",
    "Generating chart...",
    "Formatting visual output..."
  ],

  // Analytics raw data export
  'analytics:analytics_raw_data': [
    "Exporting raw data...",
    "Preparing data export...",
    "Formatting data output...",
    "Processing export request...",
    "Generating data file...",
    "Compiling raw data..."
  ]
};

// Intention-specific tool messages
export const TOOL_MESSAGES_BY_INTENTION = {
  // Leave management tools
  'leave_view_approvals': [
    "Querying leave database...",
    "Fetching approval queue...",
    "Loading leave records...",
    "Accessing HR system...",
    "Retrieving request data..."
  ],
  'leave_check_policy': [
    "Searching policy documents...",
    "Loading compliance rules...",
    "Checking policy database...",
    "Validating against rules...",
    "Retrieving policy data..."
  ],
  'leave_bulk_approve': [
    "Processing batch update...",
    "Updating multiple records...",
    "Executing bulk action...",
    "Confirming changes...",
    "Saving approval status..."
  ],
  'leave_team_balances': [
    "Querying balance data...",
    "Aggregating team stats...",
    "Building chart data...",
    "Processing visualizations...",
    "Generating chart output..."
  ],
  'leave_draft_email': [
    "Loading email template...",
    "Preparing message content...",
    "Formatting email body...",
    "Processing recipient...",
    "Generating draft..."
  ],

  // Recruitment tools
  'recruitment_view_applications': [
    "Querying candidate database...",
    "Loading application records...",
    "Fetching requisition data...",
    "Accessing HR system...",
    "Retrieving applicant list..."
  ],
  'recruitment_application_summary': [
    "Loading candidate record...",
    "Fetching profile data...",
    "Retrieving resume...",
    "Processing application...",
    "Accessing candidate files..."
  ],
  'recruitment_compare_candidates': [
    "Loading comparison data...",
    "Processing candidate scores...",
    "Building comparison matrix...",
    "Analyzing qualifications...",
    "Generating comparison..."
  ],
  'recruitment_move_stage': [
    "Updating stage status...",
    "Processing workflow change...",
    "Recording stage transition...",
    "Updating candidate records...",
    "Saving changes..."
  ],
  'recruitment_interview_questions': [
    "Generating questions...",
    "Loading role requirements...",
    "Building question set...",
    "Processing interview prep...",
    "Creating interview pack..."
  ],

  // Email tools
  'general_email': [
    "Preparing email message...",
    "Loading email system...",
    "Processing send request...",
    "Formatting content...",
    "Delivering message..."
  ]
};

// Universal tool messages - apply to all tools (fallback)
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

// Helper function to get a random message for a node (intention-aware)
export function getRandomMessage(nodeId, intention = null) {
  // For tools - check intention-specific first
  if (nodeId.includes('-tool')) {
    // Try intention-specific tool messages
    if (intention && TOOL_MESSAGES_BY_INTENTION[intention]) {
      const messages = TOOL_MESSAGES_BY_INTENTION[intention];
      return messages[Math.floor(Math.random() * messages.length)];
    }
    // Fallback to generic tool messages
    return TOOL_MESSAGES[Math.floor(Math.random() * TOOL_MESSAGES.length)];
  }

  // For orchestrator
  if (nodeId === 'orchestrator') {
    return ORCHESTRATOR_MESSAGES[Math.floor(Math.random() * ORCHESTRATOR_MESSAGES.length)];
  }

  // For agents - check intention-specific first
  if (intention) {
    const intentionKey = `${nodeId}:${intention}`;
    if (AGENT_MESSAGES[intentionKey]) {
      const messages = AGENT_MESSAGES[intentionKey];
      return messages[Math.floor(Math.random() * messages.length)];
    }
  }

  // Fallback to generic agent messages
  if (AGENT_MESSAGES[nodeId]) {
    const messages = AGENT_MESSAGES[nodeId];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Ultimate fallback
  return "Processing...";
}
