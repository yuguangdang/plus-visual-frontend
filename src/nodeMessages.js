// Simplified message pools for random display
// Aligned with Presenter Spreadsheet Scenarios A, B, C, D

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

  // ============================================
  // UK Showcase - Resident Guide Agents
  // Aligned with Presenter Spreadsheet
  // ============================================

  // Knowledge Agent (ERP - Knowledge Base Search)
  knowledge: [
    'Searching knowledge base...',
    'Retrieving relevant articles...',
    'Analyzing documentation...',
    'Finding best matches...',
    'Querying knowledge repository...',
    'Processing search results...',
    'Extracting key information...',
    'Compiling relevant data...',
    'Scanning knowledge articles...',
    'Preparing response data...'
  ],

  // ECM Agent (ERP - Attachment Grid / Content Ingestion)
  ecm: [
    'Processing attachment...',
    'Analyzing uploaded content...',
    'Storing document securely...',
    'Extracting document metadata...',
    'Validating file format...',
    'Processing image data...',
    'Indexing document content...',
    'Preparing content reference...',
    'Linking to case record...',
    'Finalizing upload...'
  ],

  // Request Agent (ERP - Request Management)
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

  // Spatial Agent (ERP - Spatial)
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

  // Web Agent (External - Websites)
  webagent: [
    'Connecting to external service...',
    'Calling third-party API...',
    'Fetching external data...',
    'Processing web response...',
    'Integrating external information...',
    'Validating external data...',
    'Synchronizing with provider...',
    'Retrieving live data...',
    'Querying external system...',
    'Processing API response...'
  ],

  // Bins Agent (External - Waste System)
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

  // Council Tax Agent (External - Revs & Bens)
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
  ],

  // ============================================
  // Scenario A - Property Inquiry (Guest)
  // ============================================
  'knowledge:property_inquiry': [
    'Searching River City information...',
    'Finding local area details...',
    'Retrieving community data...',
    'Analyzing neighborhood info...',
    'Compiling area statistics...',
    'Finding schools nearby...',
    'Checking local amenities...',
    'Gathering property context...',
    'Searching council records...',
    'Preparing area overview...'
  ],
  'knowledge:property_details': [
    'Retrieving flood risk data...',
    'Finding school information...',
    'Checking council tax bands...',
    'Analyzing property details...',
    'Compiling location data...',
    'Searching environmental records...',
    'Finding local services...',
    'Gathering detailed information...',
    'Processing property query...',
    'Preparing detailed response...'
  ],
  'spatial:property_inquiry': [
    'Loading property location...',
    'Analyzing spatial data...',
    'Checking flood zones...',
    'Mapping property boundaries...',
    'Retrieving GIS data...',
    'Processing location query...',
    'Fetching map overlays...',
    'Analyzing geographic context...',
    'Loading council tax bands...',
    'Preparing spatial results...'
  ],
  'spatial:property_details': [
    'Mapping flood risk zones...',
    'Loading environmental overlays...',
    'Analyzing property boundaries...',
    'Checking planning constraints...',
    'Retrieving detailed GIS data...',
    'Processing spatial query...',
    'Fetching detailed maps...',
    'Analyzing location data...',
    'Loading detailed overlays...',
    'Preparing map results...'
  ],
  'webagent:property_inquiry': [
    'Fetching external property data...',
    'Connecting to land registry...',
    'Retrieving flood risk data...',
    'Querying external databases...',
    'Fetching school district info...',
    'Connecting to council systems...',
    'Retrieving planning data...',
    'Accessing public records...',
    'Fetching environmental data...',
    'Integrating external sources...'
  ],
  'webagent:property_details': [
    'Fetching detailed flood data...',
    'Querying school databases...',
    'Retrieving council tax rates...',
    'Connecting to external APIs...',
    'Fetching detailed records...',
    'Accessing government data...',
    'Retrieving environmental info...',
    'Connecting to public systems...',
    'Fetching comprehensive data...',
    'Integrating all sources...'
  ],

  // ============================================
  // Scenario B - Waste Disposal / Bulky Waste (Registered)
  // ============================================
  'knowledge:waste_disposal_inquiry': [
    'Searching waste disposal options...',
    'Finding bulky waste information...',
    'Checking disposal guidelines...',
    'Retrieving waste policies...',
    'Analyzing disposal options...',
    'Finding collection services...',
    'Checking item categories...',
    'Reviewing disposal rules...',
    'Searching waste management info...',
    'Preparing disposal guidance...'
  ],
  'ecm:waste_disposal_inquiry': [
    'Processing uploaded image...',
    'Analyzing item photograph...',
    'Extracting item details...',
    'Classifying waste type...',
    'Storing image reference...',
    'Processing visual data...',
    'Indexing attachment...',
    'Validating image format...',
    'Linking to inquiry...',
    'Preparing image analysis...'
  ],
  'request:bulky_waste_booking': [
    'Creating collection request...',
    'Processing booking details...',
    'Checking available dates...',
    'Validating booking request...',
    'Preparing collection order...',
    'Processing service request...',
    'Checking eligibility...',
    'Creating work order...',
    'Scheduling collection...',
    'Finalizing booking...'
  ],
  'bincollections:bulky_waste_booking': [
    'Connecting to waste system...',
    'Checking collection slots...',
    'Booking collection date...',
    'Validating address details...',
    'Processing with provider...',
    'Confirming availability...',
    'Creating collection job...',
    'Synchronizing booking...',
    'Finalizing with waste system...',
    'Confirming collection...'
  ],

  // ============================================
  // Scenario C - Council Tax / Hardship (Registered)
  // ============================================
  'knowledge:hardship_inquiry': [
    'Searching hardship policies...',
    'Finding support options...',
    'Retrieving eligibility criteria...',
    'Checking available assistance...',
    'Analyzing support programs...',
    'Finding application process...',
    'Reviewing hardship rules...',
    'Searching benefit information...',
    'Gathering support details...',
    'Preparing assistance info...'
  ],
  'webagent:hardship_inquiry': [
    'Fetching support services...',
    'Connecting to benefit systems...',
    'Retrieving assistance programs...',
    'Checking external resources...',
    'Querying support databases...',
    'Fetching eligibility data...',
    'Connecting to council services...',
    'Retrieving program details...',
    'Accessing support information...',
    'Integrating assistance data...'
  ],
  'request:hardship_application': [
    'Creating hardship application...',
    'Processing application details...',
    'Validating eligibility...',
    'Preparing application form...',
    'Checking required documents...',
    'Processing support request...',
    'Creating case record...',
    'Initiating application...',
    'Preparing submission...',
    'Finalizing application...'
  ],
  'taxtransactions:hardship_application': [
    'Connecting to Revs & Bens...',
    'Processing hardship request...',
    'Checking account status...',
    'Validating application...',
    'Submitting to benefits system...',
    'Processing with council...',
    'Updating tax account...',
    'Synchronizing application...',
    'Confirming submission...',
    'Finalizing with Revs & Bens...'
  ],
  'ecm:document_submission': [
    'Processing medical certificate...',
    'Storing document securely...',
    'Extracting document details...',
    'Validating certificate...',
    'Indexing attachment...',
    'Linking to application...',
    'Processing uploaded file...',
    'Verifying document type...',
    'Creating document reference...',
    'Finalizing attachment...'
  ],
  'request:document_submission': [
    'Attaching to application...',
    'Updating case record...',
    'Processing submission...',
    'Validating documents...',
    'Linking evidence...',
    'Updating application status...',
    'Processing case update...',
    'Confirming attachment...',
    'Finalizing submission...',
    'Completing case update...'
  ],
  'request:request_confirmation': [
    'Confirming request details...',
    'Finalizing submission...',
    'Generating reference number...',
    'Completing request...',
    'Updating case status...',
    'Processing confirmation...',
    'Creating confirmation...',
    'Finalizing case...',
    'Completing submission...',
    'Generating confirmation...'
  ],
  'taxtransactions:council_tax_view': [
    'Connecting to Revs & Bens...',
    'Retrieving tax account...',
    'Fetching balance details...',
    'Loading transaction history...',
    'Checking payment status...',
    'Retrieving account data...',
    'Processing tax query...',
    'Fetching council tax info...',
    'Loading account details...',
    'Preparing tax summary...'
  ],
  'taxtransactions:payment_redirect': [
    'Connecting to payment portal...',
    'Preparing payment session...',
    'Loading payment options...',
    'Initializing transaction...',
    'Connecting to Revs & Bens...',
    'Setting up payment...',
    'Preparing secure connection...',
    'Loading payment gateway...',
    'Initializing payment flow...',
    'Redirecting to portal...'
  ],

  // ============================================
  // Scenario D - Infrastructure Report / Pothole (Guest)
  // ============================================
  'knowledge:infrastructure_report': [
    'Finding report categories...',
    'Checking request types...',
    'Retrieving reporting process...',
    'Analyzing issue type...',
    'Finding relevant category...',
    'Checking required information...',
    'Processing report query...',
    'Identifying report type...',
    'Gathering process details...',
    'Preparing report guidance...'
  ],
  'ecm:infrastructure_report': [
    'Processing pothole image...',
    'Analyzing damage photo...',
    'Extracting location data...',
    'Storing evidence image...',
    'Processing visual evidence...',
    'Indexing photo attachment...',
    'Validating image quality...',
    'Creating image reference...',
    'Linking to report...',
    'Finalizing photo upload...'
  ],
  'request:infrastructure_report': [
    'Creating infrastructure report...',
    'Processing pothole details...',
    'Validating location...',
    'Creating work request...',
    'Processing report submission...',
    'Generating case reference...',
    'Initiating repair request...',
    'Creating service ticket...',
    'Processing hazard report...',
    'Finalizing submission...'
  ],
  'request:request_details': [
    'Processing additional details...',
    'Updating report information...',
    'Adding hazard description...',
    'Enriching case data...',
    'Processing update...',
    'Validating details...',
    'Updating case record...',
    'Adding information...',
    'Processing submission...',
    'Finalizing details...'
  ],
  'request:request_with_attachment': [
    'Finalizing report with evidence...',
    'Completing submission...',
    'Generating reference number...',
    'Confirming report details...',
    'Processing final submission...',
    'Creating confirmation...',
    'Completing case...',
    'Finalizing with attachments...',
    'Generating case number...',
    'Completing report...'
  ],
  'ecm:request_with_attachment': [
    'Linking attachments to case...',
    'Finalizing document storage...',
    'Confirming evidence attached...',
    'Completing document link...',
    'Processing attachment link...',
    'Verifying documents stored...',
    'Confirming upload complete...',
    'Linking evidence to report...',
    'Finalizing attachments...',
    'Completing storage...'
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

// Knowledge Base tool messages (Intention-Specific) - Student Guide
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

// ============================================
// Resident Guide Tool Messages
// Aligned with Presenter Spreadsheet
// ============================================

// Knowledge Base tool messages (Resident Guide)
export const KNOWLEDGE_TOOL_MESSAGES = {
  'property_inquiry': [
    'Accessing Knowledge Base...',
    'Querying area information...',
    'Retrieving community data...',
    'Loading local details...',
    'Searching knowledge graph...',
    'Fetching area records...',
    'Processing KB query...',
    'Indexing results...',
    'Extracting information...',
    'Preparing knowledge data...'
  ],
  'property_details': [
    'Accessing Knowledge Base...',
    'Querying detailed records...',
    'Retrieving flood information...',
    'Loading school data...',
    'Searching detailed knowledge...',
    'Fetching comprehensive data...',
    'Processing detailed query...',
    'Indexing detailed results...',
    'Extracting full information...',
    'Preparing detailed data...'
  ],
  'waste_disposal_inquiry': [
    'Accessing Knowledge Base...',
    'Querying waste policies...',
    'Retrieving disposal rules...',
    'Loading waste guidelines...',
    'Searching disposal info...',
    'Fetching waste data...',
    'Processing waste query...',
    'Indexing disposal options...',
    'Extracting guidelines...',
    'Preparing disposal data...'
  ],
  'hardship_inquiry': [
    'Accessing Knowledge Base...',
    'Querying support policies...',
    'Retrieving hardship criteria...',
    'Loading assistance programs...',
    'Searching support info...',
    'Fetching eligibility data...',
    'Processing support query...',
    'Indexing assistance options...',
    'Extracting support details...',
    'Preparing hardship data...'
  ],
  'infrastructure_report': [
    'Accessing Knowledge Base...',
    'Querying report categories...',
    'Retrieving request types...',
    'Loading reporting process...',
    'Searching report info...',
    'Fetching category data...',
    'Processing report query...',
    'Indexing report types...',
    'Extracting process details...',
    'Preparing report guidance...'
  ],
  'default': [
    'Accessing Knowledge Base...',
    'Querying knowledge graph...',
    'Retrieving information...',
    'Loading data...',
    'Searching records...',
    'Fetching results...',
    'Processing query...',
    'Indexing data...',
    'Extracting content...',
    'Preparing response...'
  ]
};

// ECM (Content Management) tool messages
export const ECM_TOOL_MESSAGES = {
  'waste_disposal_inquiry': [
    'Accessing Content Mgmt...',
    'Processing image upload...',
    'Storing attachment...',
    'Analyzing image content...',
    'Indexing document...',
    'Validating file...',
    'Creating reference...',
    'Processing visual data...',
    'Finalizing storage...',
    'Completing upload...'
  ],
  'document_submission': [
    'Accessing Content Mgmt...',
    'Processing certificate...',
    'Storing document securely...',
    'Extracting metadata...',
    'Indexing attachment...',
    'Validating document...',
    'Creating document link...',
    'Processing file data...',
    'Finalizing document...',
    'Completing storage...'
  ],
  'infrastructure_report': [
    'Accessing Content Mgmt...',
    'Processing photo evidence...',
    'Storing damage image...',
    'Analyzing photo...',
    'Indexing evidence...',
    'Validating image...',
    'Creating evidence link...',
    'Processing upload...',
    'Finalizing attachment...',
    'Completing evidence storage...'
  ],
  'request_with_attachment': [
    'Accessing Content Mgmt...',
    'Linking attachments...',
    'Confirming storage...',
    'Verifying documents...',
    'Completing links...',
    'Finalizing references...',
    'Processing completion...',
    'Confirming attachments...',
    'Completing storage links...',
    'Finalizing ECM operation...'
  ],
  'default': [
    'Accessing Content Mgmt...',
    'Processing attachment...',
    'Storing document...',
    'Indexing content...',
    'Validating file...',
    'Creating reference...',
    'Processing data...',
    'Finalizing storage...',
    'Completing operation...',
    'Preparing response...'
  ]
};

// Request Management tool messages
export const REQUEST_TOOL_MESSAGES = {
  'bulky_waste_booking': [
    'Accessing Request Mgmt...',
    'Creating booking request...',
    'Processing service order...',
    'Validating details...',
    'Scheduling collection...',
    'Creating work order...',
    'Processing booking...',
    'Confirming request...',
    'Finalizing order...',
    'Completing booking...'
  ],
  'hardship_application': [
    'Accessing Request Mgmt...',
    'Creating application...',
    'Processing hardship case...',
    'Validating submission...',
    'Creating case record...',
    'Processing application...',
    'Updating case status...',
    'Finalizing submission...',
    'Completing application...',
    'Generating reference...'
  ],
  'document_submission': [
    'Accessing Request Mgmt...',
    'Updating case record...',
    'Attaching documents...',
    'Processing submission...',
    'Validating attachments...',
    'Linking evidence...',
    'Updating status...',
    'Processing update...',
    'Completing attachment...',
    'Finalizing submission...'
  ],
  'request_confirmation': [
    'Accessing Request Mgmt...',
    'Confirming request...',
    'Generating reference...',
    'Completing case...',
    'Updating status...',
    'Processing confirmation...',
    'Finalizing request...',
    'Creating confirmation...',
    'Completing submission...',
    'Generating number...'
  ],
  'infrastructure_report': [
    'Accessing Request Mgmt...',
    'Creating report...',
    'Processing submission...',
    'Validating location...',
    'Creating work request...',
    'Generating reference...',
    'Processing report...',
    'Updating status...',
    'Completing submission...',
    'Finalizing report...'
  ],
  'request_details': [
    'Accessing Request Mgmt...',
    'Updating details...',
    'Processing information...',
    'Adding description...',
    'Enriching case...',
    'Validating update...',
    'Processing update...',
    'Confirming details...',
    'Completing update...',
    'Finalizing details...'
  ],
  'request_with_attachment': [
    'Accessing Request Mgmt...',
    'Finalizing request...',
    'Generating reference...',
    'Completing submission...',
    'Processing confirmation...',
    'Creating reference number...',
    'Completing case...',
    'Finalizing report...',
    'Generating confirmation...',
    'Completing request...'
  ],
  'default': [
    'Accessing Request Mgmt...',
    'Processing request...',
    'Creating case record...',
    'Validating submission...',
    'Updating status...',
    'Processing operation...',
    'Completing request...',
    'Finalizing case...',
    'Generating reference...',
    'Completing operation...'
  ]
};

// Spatial tool messages
export const SPATIAL_TOOL_MESSAGES = {
  'property_inquiry': [
    'Accessing Spatial system...',
    'Querying GIS database...',
    'Retrieving map coordinates...',
    'Loading geographic data...',
    'Processing location request...',
    'Executing spatial query...',
    'Fetching mapping information...',
    'Validating location data...',
    'Synchronizing spatial records...',
    'Finalizing location details...'
  ],
  'property_details': [
    'Accessing Spatial system...',
    'Loading flood overlays...',
    'Querying detailed GIS...',
    'Retrieving property boundaries...',
    'Processing environmental data...',
    'Fetching detailed maps...',
    'Loading planning data...',
    'Analyzing constraints...',
    'Preparing map results...',
    'Finalizing spatial data...'
  ],
  'default': [
    'Accessing Spatial system...',
    'Querying location database...',
    'Processing geographic data...',
    'Executing spatial operation...',
    'Fetching map information...',
    'Validating coordinates...',
    'Synchronizing records...',
    'Updating spatial data...',
    'Finalizing operation...',
    'Completing request...'
  ]
};

// Web Agent (Web Search) tool messages
export const WEBAGENT_TOOL_MESSAGES = {
  'property_inquiry': [
    'Connecting to Web Search...',
    'Querying external APIs...',
    'Fetching property data...',
    'Accessing public records...',
    'Retrieving external info...',
    'Processing API response...',
    'Integrating web data...',
    'Validating results...',
    'Finalizing fetch...',
    'Completing web query...'
  ],
  'property_details': [
    'Connecting to Web Search...',
    'Querying detailed APIs...',
    'Fetching flood data...',
    'Accessing school records...',
    'Retrieving detailed info...',
    'Processing responses...',
    'Integrating all data...',
    'Validating details...',
    'Finalizing queries...',
    'Completing data fetch...'
  ],
  'hardship_inquiry': [
    'Connecting to Web Search...',
    'Querying support services...',
    'Fetching assistance data...',
    'Accessing benefit info...',
    'Retrieving program details...',
    'Processing support data...',
    'Integrating services...',
    'Validating options...',
    'Finalizing search...',
    'Completing query...'
  ],
  'default': [
    'Connecting to Web Search...',
    'Querying external services...',
    'Fetching web data...',
    'Accessing APIs...',
    'Retrieving information...',
    'Processing response...',
    'Integrating data...',
    'Validating results...',
    'Finalizing query...',
    'Completing fetch...'
  ]
};

// Bins (Waste System) tool messages
export const BINCOLLECTIONS_TOOL_MESSAGES = {
  'bulky_waste_booking': [
    'Connecting to Waste System...',
    'Checking collection slots...',
    'Booking collection date...',
    'Validating address...',
    'Processing booking...',
    'Confirming availability...',
    'Creating collection job...',
    'Synchronizing booking...',
    'Finalizing with provider...',
    'Completing booking...'
  ],
  'default': [
    'Connecting to Waste System...',
    'Querying waste services...',
    'Fetching collection data...',
    'Processing request...',
    'Validating details...',
    'Checking availability...',
    'Creating request...',
    'Synchronizing data...',
    'Finalizing operation...',
    'Completing query...'
  ]
};

// Council Tax (Revs & Bens) tool messages
export const TAXTRANSACTIONS_TOOL_MESSAGES = {
  'hardship_application': [
    'Connecting to Revs & Bens...',
    'Submitting application...',
    'Processing hardship request...',
    'Validating eligibility...',
    'Updating account...',
    'Confirming submission...',
    'Processing with benefits...',
    'Synchronizing application...',
    'Finalizing submission...',
    'Completing application...'
  ],
  'council_tax_view': [
    'Connecting to Revs & Bens...',
    'Retrieving tax account...',
    'Fetching balance...',
    'Loading transactions...',
    'Processing query...',
    'Validating account...',
    'Fetching details...',
    'Synchronizing data...',
    'Preparing summary...',
    'Completing retrieval...'
  ],
  'payment_redirect': [
    'Connecting to Revs & Bens...',
    'Initializing payment...',
    'Loading payment portal...',
    'Preparing transaction...',
    'Setting up payment...',
    'Validating session...',
    'Creating payment link...',
    'Preparing redirect...',
    'Finalizing setup...',
    'Redirecting to portal...'
  ],
  'default': [
    'Connecting to Revs & Bens...',
    'Querying tax system...',
    'Fetching account data...',
    'Processing request...',
    'Validating information...',
    'Retrieving details...',
    'Synchronizing data...',
    'Processing query...',
    'Finalizing operation...',
    'Completing request...'
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

  // Special handling for Knowledge Base tool - Student Guide (intention-aware)
  if (nodeId === 'Knowledge-tool') {
    const messages = intention && KB_TOOL_MESSAGES[intention]
      ? KB_TOOL_MESSAGES[intention]
      : KB_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // ============================================
  // Resident Guide Tools (intention-aware)
  // ============================================

  // Knowledge Base tool (Resident Guide)
  if (nodeId === 'knowledge-tool') {
    const messages = intention && KNOWLEDGE_TOOL_MESSAGES[intention]
      ? KNOWLEDGE_TOOL_MESSAGES[intention]
      : KNOWLEDGE_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // ECM tool
  if (nodeId === 'ecm-tool') {
    const messages = intention && ECM_TOOL_MESSAGES[intention]
      ? ECM_TOOL_MESSAGES[intention]
      : ECM_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Request Management tool
  if (nodeId === 'request-tool') {
    const messages = intention && REQUEST_TOOL_MESSAGES[intention]
      ? REQUEST_TOOL_MESSAGES[intention]
      : REQUEST_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Spatial tool
  if (nodeId === 'spatial-tool') {
    const messages = intention && SPATIAL_TOOL_MESSAGES[intention]
      ? SPATIAL_TOOL_MESSAGES[intention]
      : SPATIAL_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Web Agent tool
  if (nodeId === 'webagent-tool') {
    const messages = intention && WEBAGENT_TOOL_MESSAGES[intention]
      ? WEBAGENT_TOOL_MESSAGES[intention]
      : WEBAGENT_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Bins (Waste System) tool
  if (nodeId === 'bincollections-tool') {
    const messages = intention && BINCOLLECTIONS_TOOL_MESSAGES[intention]
      ? BINCOLLECTIONS_TOOL_MESSAGES[intention]
      : BINCOLLECTIONS_TOOL_MESSAGES['default'];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Council Tax (Revs & Bens) tool
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
  if (['spatial', 'taxtransactions', 'bincollections', 'request', 'knowledge', 'ecm', 'webagent'].includes(nodeId)) {
    const intentionKey = `${nodeId}:${intention}`;
    const messages = intention && AGENT_MESSAGES[intentionKey]
      ? AGENT_MESSAGES[intentionKey]
      : AGENT_MESSAGES[nodeId]; // Fallback to generic messages
    if (messages) {
      return messages[Math.floor(Math.random() * messages.length)];
    }
  }

  // For other agents - use specific agent messages if available
  if (AGENT_MESSAGES[nodeId]) {
    const messages = AGENT_MESSAGES[nodeId];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Fallback - shouldn't happen but just in case
  return "Processing...";
}
