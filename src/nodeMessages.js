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
  ],

  // UK Showcase - Student Guide (Intention-Specific Messages)
  // SM Agent - Onboarding Appointment
  'StudentManagement:student_onboarding_appointment': [
    "Scheduling appointment...",
    "Checking advisor availability...",
    "Booking calendar slot...",
    "Coordinating meeting time...",
    "Confirming appointment...",
    "Accessing calendar system...",
    "Finding available slots...",
    "Reserving time slot...",
    "Processing appointment request...",
    "Updating appointment schedule..."
  ],

  // SM Agent - Onboarding Tasks
  'StudentManagement:student_onboarding_tasks': [
    "Loading onboarding tasks...",
    "Reviewing checklist items...",
    "Accessing task list...",
    "Checking task status...",
    "Updating task progress...",
    "Validating requirements...",
    "Processing onboarding steps...",
    "Reviewing required forms...",
    "Managing action items...",
    "Coordinating onboarding workflow..."
  ],

  // SM Agent - Assessment Extension
  'StudentManagement:student_assessment_extension': [
    "Processing extension request...",
    "Checking eligibility criteria...",
    "Reviewing student circumstances...",
    "Validating extension grounds...",
    "Accessing student records...",
    "Analyzing special consideration...",
    "Coordinating with assessments...",
    "Processing accommodation request...",
    "Updating extension status...",
    "Managing deadline adjustments..."
  ],

  // SM Agent - Exam Planner
  'StudentManagement:student_exam_planner': [
    "Analyzing exam schedule...",
    "Planning study timetable...",
    "Coordinating exam dates...",
    "Checking exam conflicts...",
    "Organizing exam calendar...",
    "Processing exam bookings...",
    "Reviewing exam requirements...",
    "Managing exam logistics...",
    "Scheduling exam preparation...",
    "Optimizing study plan..."
  ],

  // KB Agent - Assessment Extension
  'Knowledge:student_assessment_extension': [
    "Searching extension policies...",
    "Retrieving special consideration guidelines...",
    "Accessing accommodation rules...",
    "Loading extension criteria...",
    "Reviewing policy documents...",
    "Checking eligibility requirements...",
    "Retrieving assessment regulations...",
    "Analyzing extension procedures...",
    "Accessing university policies...",
    "Compiling extension information..."
  ],

  // KB Agent - Exam Planner
  'Knowledge:student_exam_planner': [
    "Loading exam regulations...",
    "Accessing study resources...",
    "Retrieving exam guidelines...",
    "Searching exam policies...",
    "Accessing timetable rules...",
    "Loading study planning guides...",
    "Reviewing exam procedures...",
    "Retrieving preparation materials...",
    "Accessing exam documentation...",
    "Compiling exam information..."
  ],

  // Fallback generic messages for Student Guide agents
  StudentManagement: [
    "Processing student request...",
    "Accessing student management...",
    "Coordinating services...",
    "Updating information...",
    "Managing student data...",
    "Processing request...",
    "Accessing records...",
    "Preparing response...",
    "Validating information...",
    "Finalizing details..."
  ],

  Knowledge: [
    "Searching knowledge base...",
    "Accessing policies...",
    "Finding information...",
    "Retrieving documents...",
    "Analyzing guidelines...",
    "Cross-referencing data...",
    "Validating information...",
    "Loading resources...",
    "Checking references...",
    "Compiling response..."
  ],

  // UK Showcase - Resident Guide (Intention-Specific Messages)
  // Spatial Agent - Spatial Query (multi-agent with communityevents)
  'spatial:spatial_query': [
    "Querying location data...",
    "Processing geographic search...",
    "Analyzing spatial coordinates...",
    "Checking mapping systems...",
    "Retrieving location details...",
    "Validating address information...",
    "Accessing geographic database...",
    "Processing location request...",
    "Analyzing map features...",
    "Fetching spatial information..."
  ],

  // Community Events Agent - Spatial Query (multi-agent with spatial)
  'communityevents:spatial_query': [
    "Finding nearby events...",
    "Checking location-based activities...",
    "Accessing local event database...",
    "Reviewing area events...",
    "Processing location events...",
    "Searching nearby activities...",
    "Analyzing event proximity...",
    "Fetching local event data...",
    "Checking community activities...",
    "Validating event locations..."
  ],

  // Council Tax Agent - Council Tax Query (multi-agent with communityevents)
  'taxtransactions:council_tax_query': [
    "Checking tax band information...",
    "Retrieving council tax records...",
    "Analyzing property tax data...",
    "Accessing tax assessment...",
    "Processing tax inquiry...",
    "Reviewing billing information...",
    "Fetching tax band details...",
    "Validating tax records...",
    "Checking payment status...",
    "Analyzing tax account..."
  ],

  // Community Events Agent - Council Tax Query (multi-agent with taxtransactions)
  'communityevents:council_tax_query': [
    "Checking community support services...",
    "Accessing payment assistance programs...",
    "Reviewing council resources...",
    "Finding support information...",
    "Checking available services...",
    "Accessing community programs...",
    "Reviewing assistance options...",
    "Fetching support resources...",
    "Analyzing available help...",
    "Checking council services..."
  ],

  // Fallback generic messages for Resident Guide agents
  bincollections: [
    "Checking collection schedule...",
    "Verifying bin types...",
    "Accessing waste management data...",
    "Finding collection dates...",
    "Checking service updates...",
    "Reviewing bin requests...",
    "Processing collection query...",
    "Fetching schedule information...",
    "Validating address details...",
    "Updating collection data..."
  ],

  communityevents: [
    "Searching event calendar...",
    "Checking event details...",
    "Accessing community database...",
    "Finding upcoming events...",
    "Reviewing event information...",
    "Processing event query...",
    "Fetching event schedules...",
    "Validating event details...",
    "Checking availability...",
    "Updating event data..."
  ],

  request: [
    "Processing request...",
    "Checking service availability...",
    "Accessing request systems...",
    "Reviewing request status...",
    "Validating request details...",
    "Fetching service information...",
    "Analyzing request priority...",
    "Updating request records...",
    "Processing service query...",
    "Checking request history..."
  ],

  spatial: [
    "Querying spatial data...",
    "Checking geographic information...",
    "Accessing mapping services...",
    "Processing location query...",
    "Analyzing map data...",
    "Fetching spatial records...",
    "Validating coordinates...",
    "Updating map information...",
    "Reviewing spatial features...",
    "Processing geographic data..."
  ],

  taxtransactions: [
    "Checking council tax records...",
    "Verifying payment status...",
    "Accessing tax database...",
    "Processing payment query...",
    "Reviewing transaction history...",
    "Fetching account details...",
    "Analyzing tax information...",
    "Validating payment records...",
    "Updating tax data...",
    "Checking balance information..."
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

// Student Management tool messages (Intention-Specific)
export const SM_TOOL_MESSAGES = {
  'student_onboarding_appointment': [
    "Accessing appointment system...",
    "Querying calendar database...",
    "Booking appointment slot...",
    "Updating calendar records...",
    "Synchronizing appointment data...",
    "Validating booking details...",
    "Executing appointment creation...",
    "Confirming reservation...",
    "Finalizing appointment...",
    "Storing appointment data..."
  ],
  'student_onboarding_tasks': [
    "Accessing task management system...",
    "Querying onboarding checklist...",
    "Loading task database...",
    "Updating task status...",
    "Synchronizing task data...",
    "Validating task completion...",
    "Executing task updates...",
    "Processing checklist items...",
    "Finalizing task changes...",
    "Storing task progress..."
  ],
  'student_assessment_extension': [
    "Accessing student records system...",
    "Querying assessment database...",
    "Processing extension request...",
    "Updating extension records...",
    "Synchronizing assessment data...",
    "Validating extension eligibility...",
    "Executing extension approval...",
    "Adjusting deadline records...",
    "Finalizing extension...",
    "Storing extension data..."
  ],
  'student_exam_planner': [
    "Accessing exam scheduling system...",
    "Querying exam database...",
    "Loading exam timetables...",
    "Updating exam schedules...",
    "Synchronizing exam data...",
    "Validating exam bookings...",
    "Executing schedule updates...",
    "Processing exam logistics...",
    "Finalizing exam plan...",
    "Storing exam schedule..."
  ],
  // Fallback generic messages
  'default': [
    "Accessing Student Management...",
    "Querying student records...",
    "Updating database...",
    "Processing request...",
    "Executing operation...",
    "Fetching data...",
    "Running transaction...",
    "Synchronizing data...",
    "Validating records...",
    "Completing operation..."
  ]
};

// Knowledge Base tool messages (Intention-Specific)
export const KB_TOOL_MESSAGES = {
  'student_assessment_extension': [
    "Accessing DXP Knowledge Base...",
    "Querying extension policies...",
    "Retrieving special consideration docs...",
    "Loading policy database...",
    "Searching extension guidelines...",
    "Indexing accommodation rules...",
    "Filtering extension criteria...",
    "Ranking policy relevance...",
    "Extracting policy content...",
    "Preparing extension information..."
  ],
  'student_exam_planner': [
    "Accessing DXP Knowledge Base...",
    "Querying exam regulations...",
    "Retrieving study resources...",
    "Loading exam guidelines...",
    "Searching exam policies...",
    "Indexing timetable rules...",
    "Filtering exam procedures...",
    "Ranking resource relevance...",
    "Extracting exam content...",
    "Preparing exam information..."
  ],
  // Fallback generic messages
  'default': [
    "Accessing DXP Knowledge Base...",
    "Searching documentation...",
    "Retrieving policies...",
    "Querying knowledge graph...",
    "Loading reference materials...",
    "Indexing information...",
    "Filtering results...",
    "Ranking relevance...",
    "Extracting content...",
    "Preparing knowledge..."
  ]
};

// Resident Guide Tool Messages (Intention-Specific)
// Spatial tool messages
export const SPATIAL_TOOL_MESSAGES = {
  'spatial_query': [
    "Accessing Spatial system...",
    "Querying GIS database...",
    "Retrieving map coordinates...",
    "Loading geographic data...",
    "Processing location request...",
    "Executing spatial query...",
    "Fetching mapping information...",
    "Validating location data...",
    "Synchronizing spatial records...",
    "Finalizing location details..."
  ],
  'default': [
    "Accessing Spatial system...",
    "Querying location database...",
    "Processing geographic data...",
    "Executing spatial operation...",
    "Fetching map information...",
    "Validating coordinates...",
    "Synchronizing records...",
    "Updating spatial data...",
    "Finalizing operation...",
    "Completing request..."
  ]
};

// Community Events (Third Party) tool messages
export const COMMUNITYEVENTS_TOOL_MESSAGES = {
  'spatial_query': [
    "Accessing Third Party APIs...",
    "Querying event providers...",
    "Retrieving location events...",
    "Loading nearby activities...",
    "Searching external databases...",
    "Fetching community calendars...",
    "Processing event data...",
    "Validating event information...",
    "Synchronizing external data...",
    "Finalizing event details..."
  ],
  'council_tax_query': [
    "Accessing Third Party services...",
    "Querying support providers...",
    "Retrieving assistance programs...",
    "Loading community resources...",
    "Searching external databases...",
    "Fetching support information...",
    "Processing service data...",
    "Validating support options...",
    "Synchronizing external data...",
    "Finalizing support details..."
  ],
  'default': [
    "Accessing Third Party APIs...",
    "Querying external services...",
    "Retrieving external data...",
    "Loading provider information...",
    "Searching external databases...",
    "Fetching external records...",
    "Processing API response...",
    "Validating external data...",
    "Synchronizing information...",
    "Finalizing operation..."
  ]
};

// Council Tax (Finance System) tool messages
export const TAXTRANSACTIONS_TOOL_MESSAGES = {
  'council_tax_query': [
    "Accessing Finance System...",
    "Querying tax database...",
    "Retrieving tax band records...",
    "Loading billing information...",
    "Processing tax inquiry...",
    "Executing tax query...",
    "Fetching account details...",
    "Validating tax records...",
    "Synchronizing financial data...",
    "Finalizing tax information..."
  ],
  'payments_query': [
    "Accessing Finance System...",
    "Querying payment records...",
    "Retrieving transaction history...",
    "Loading account balance...",
    "Processing payment inquiry...",
    "Executing payment query...",
    "Fetching billing details...",
    "Validating payment data...",
    "Synchronizing transactions...",
    "Finalizing payment information..."
  ],
  'default': [
    "Accessing Finance System...",
    "Querying financial database...",
    "Processing transaction...",
    "Executing financial operation...",
    "Fetching account data...",
    "Validating records...",
    "Synchronizing data...",
    "Updating financial records...",
    "Finalizing operation...",
    "Completing request..."
  ]
};

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
  // Special handling for Student Management tool (intention-aware)
  if (nodeId === 'StudentManagement-tool') {
    const messages = intention && SM_TOOL_MESSAGES[intention]
      ? SM_TOOL_MESSAGES[intention]
      : SM_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Special handling for Knowledge Base tool (intention-aware)
  if (nodeId === 'Knowledge-tool') {
    const messages = intention && KB_TOOL_MESSAGES[intention]
      ? KB_TOOL_MESSAGES[intention]
      : KB_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Special handling for Resident Guide tools (intention-aware)
  if (nodeId === 'spatial-tool') {
    const messages = intention && SPATIAL_TOOL_MESSAGES[intention]
      ? SPATIAL_TOOL_MESSAGES[intention]
      : SPATIAL_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  if (nodeId === 'communityevents-tool') {
    const messages = intention && COMMUNITYEVENTS_TOOL_MESSAGES[intention]
      ? COMMUNITYEVENTS_TOOL_MESSAGES[intention]
      : COMMUNITYEVENTS_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  if (nodeId === 'taxtransactions-tool') {
    const messages = intention && TAXTRANSACTIONS_TOOL_MESSAGES[intention]
      ? TAXTRANSACTIONS_TOOL_MESSAGES[intention]
      : TAXTRANSACTIONS_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // For generic tools (fallback)
  if (nodeId.includes('-tool')) {
    return TOOL_MESSAGES[Math.floor(Math.random() * TOOL_MESSAGES.length)];
  }

  // For orchestrator
  if (nodeId === 'orchestrator') {
    return ORCHESTRATOR_MESSAGES[Math.floor(Math.random() * ORCHESTRATOR_MESSAGES.length)];
  }

  // For Student Guide agents (intention-aware)
  if (nodeId === 'StudentManagement' || nodeId === 'Knowledge') {
    const intentionKey = `${nodeId}:${intention}`;
    const messages = intention && AGENT_MESSAGES[intentionKey]
      ? AGENT_MESSAGES[intentionKey]
      : AGENT_MESSAGES[nodeId]; // Fallback to generic messages
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // For Resident Guide agents (intention-aware)
  if (nodeId === 'spatial' || nodeId === 'communityevents' || nodeId === 'taxtransactions' || nodeId === 'bincollections' || nodeId === 'request') {
    const intentionKey = `${nodeId}:${intention}`;
    const messages = intention && AGENT_MESSAGES[intentionKey]
      ? AGENT_MESSAGES[intentionKey]
      : AGENT_MESSAGES[nodeId]; // Fallback to generic messages
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // For other agents - use specific agent messages if available
  if (AGENT_MESSAGES[nodeId]) {
    const messages = AGENT_MESSAGES[nodeId];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Fallback - shouldn't happen but just in case
  return "Processing...";
}