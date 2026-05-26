import { IndustryService, TimelineStage } from "@/types/service";

const getBaseTimeline = (industrySlug: string): TimelineStage[] => {
  if (industrySlug === "b2c-ecommerce") {
    return [
      {
        id: "t1",
        title: "System Consulting",
        objective: "Map your supply chain and inventory flows to ensure technical alignment with your operational goals.",
        businessImpact: "Secures continuity during the transition and identifies system bottlenecks early.",
        duration: "2 Weeks",
        status: "completed",
        clientReviewStatus: "Verified",
        operationalNotes: "Audited existing POS systems and inventory data.",
        deliverables: ["Architecture Blueprint", "Data Strategy"]
      },
      {
        id: "t2",
        title: "Interface Architecture",
        objective: "Design intuitive customer experiences that improve trust and streamline the purchasing process.",
        businessImpact: "Increases conversions through frictionless navigation and clear product presentation.",
        duration: "3 Weeks",
        status: "completed",
        clientReviewStatus: "Verified",
        operationalNotes: "Optimized mobile checkout flow for higher volume.",
        deliverables: ["Interactive Prototypes", "Design Guidelines"]
      },
      {
        id: "t3",
        title: "Core Engineering",
        objective: "Construct the digital storefront and integrate secure back-end data pipelines for inventory.",
        businessImpact: "Delivers a scalable platform capable of handling high traffic without downtime.",
        duration: "5 Weeks",
        status: "active",
        clientReviewStatus: "Client Validation Required",
        operationalNotes: "Configuring real-time inventory synchronization.",
        deliverables: ["Frontend System", "API Integration", "Staging Environment"]
      },
      {
        id: "t4",
        title: "Quality Assurance",
        objective: "Perform rigorous load testing and security auditing across payment gateways.",
        businessImpact: "Protects customer financial data and prevents transaction errors.",
        duration: "2 Weeks",
        status: "upcoming",
        clientReviewStatus: "Awaiting Feature Sign-off",
        operationalNotes: "Simulating high-concurrency checkout scenarios.",
        deliverables: ["Testing Report", "Security Clearance"]
      },
      {
        id: "t5",
        title: "Platform Launch",
        objective: "Seamlessly transition operations to the new infrastructure while monitoring performance.",
        businessImpact: "Immediate realization of faster speeds and improved customer experience.",
        duration: "1 Week",
        status: "upcoming",
        clientReviewStatus: "Deployment Ready",
        operationalNotes: "Routing scheduled during off-peak hours to minimize disruption.",
        deliverables: ["Live Production Setup", "Staff Documentation"]
      }
    ];
  }

  // Generic enterprise timeline mapping for all other industries
  return [
    {
      id: "t1",
      title: "System Consulting",
      objective: "Audit your legacy workflows to map the exact data pipelines required for modernization.",
      businessImpact: "Prevents operational disruption while preparing internal systems for new capabilities.",
      duration: "2 Weeks",
      status: "completed",
      clientReviewStatus: "Verified",
      operationalNotes: "Identifying current manual bottlenecks.",
      deliverables: ["System Blueprint", "Workflow Diagrams"]
    },
    {
      id: "t2",
      title: "Interface Architecture",
      objective: "Design clear, functional interfaces that reduce cognitive load for your staff and clients.",
      businessImpact: "Accelerates user adoption and reduces staff training requirements.",
      duration: "3 Weeks",
      status: "completed",
      clientReviewStatus: "Verified",
      operationalNotes: "Prioritizing data density and clear navigation.",
      deliverables: ["Interactive Prototypes", "Component Library"]
    },
    {
      id: "t3",
      title: "Core Engineering",
      objective: "Build the self-service interfaces and integrate the necessary data routing infrastructure.",
      businessImpact: "Establishes a reliable, automated environment that operates continuously.",
      duration: "6 Weeks",
      status: "active",
      clientReviewStatus: "Awaiting Design Approval",
      operationalNotes: "Developing reliable API bridges between systems.",
      deliverables: ["Beta Application", "Database Schema"]
    },
    {
      id: "t4",
      title: "Quality Assurance",
      objective: "Conduct thorough security audits and functional testing before processing live data.",
      businessImpact: "Guarantees system stability and protects your operational reputation.",
      duration: "2 Weeks",
      status: "upcoming",
      clientReviewStatus: "Awaiting Feature Sign-off",
      operationalNotes: "Reviewing all authentication protocols.",
      deliverables: ["QA Verification", "Security Certification"]
    },
    {
      id: "t5",
      title: "Platform Launch",
      objective: "Execute a controlled deployment to production with comprehensive system monitoring.",
      businessImpact: "Enables real-world scaling without risking core client relationships.",
      duration: "1 Week",
      status: "upcoming",
      clientReviewStatus: "Deployment Ready",
      operationalNotes: "Phased rollout starting with internal teams.",
      deliverables: ["Production Release", "System Documentation"]
    }
  ];
};

export const industries: IndustryService[] = [
  {
    slug: "b2c-ecommerce",
    iconName: "ShoppingCart",
    title: "B2C E-Commerce",
    subtitle: "Scalable Ordering Systems",
    heroTagline: "High-performance systems for modern retail brands.",
    heroMetadata: ["Real-Time Inventory", "Secure Checkout", "Loyalty Integration"],
    shortDescription: "Robust digital storefronts and back-end inventory management built for high-volume retail operations.",
    businessOutcomes: ["Increased conversion rates", "Accurate inventory sync", "Faster page loads"],
    problems: ["Cart abandonment from slow loading.", "Disconnected inventory causing stockouts.", "Generic customer experiences."],
    solutions: ["Custom decoupled architecture for fast loading.", "Unified databases linking POS and online sales.", "Professional brand implementation."],
    features: [
      { title: "Decoupled Architecture", description: "Separated front-end for faster shopping experiences.", iconName: "Zap" },
      { title: "Unified Inventory", description: "Stock synchronization across all sales channels.", iconName: "Database" },
      { title: "Smart Routing", description: "Personalized product recommendations.", iconName: "Bot" }
    ],
    deliverables: [{ title: "Custom Storefront", description: "Optimized consumer interface." }, { title: "Management Dashboard", description: "Centralized control for products." }],
    technologies: [
      { name: "Modern Frameworks", description: "Fast static & dynamic storefront delivery." },
      { name: "Relational Data", description: "Secure ledger for orders and inventory." }
    ],
    transformationImpacts: [
      { title: "Abandoned Carts", description: "Reduced through optimized page performance." },
      { title: "Inventory Errors", description: "Minimized via omni-channel synchronization." }
    ],
    operationalPreviews: [
      { title: "Order Fulfillment", type: "pipeline", description: "Tracking active order states." },
      { title: "Inventory Levels", type: "metrics", description: "Monitoring stock depletion rates." }
    ],
    timeline: getBaseTimeline("b2c-ecommerce"),
    ctaText: "Start Planning"
  },
  {
    slug: "b2b-systems",
    iconName: "Building2",
    title: "B2B Systems",
    subtitle: "Enterprise Procurement",
    heroTagline: "Secure transactional platforms for supply chain operations.",
    heroMetadata: ["Automated Procurement", "Secure Portals", "ERP Integration"],
    shortDescription: "Reliable platforms designed to manage wholesale, supply chain, and B2B transactional workflows.",
    businessOutcomes: ["Automated order routing", "Secure client access", "Streamlined ERP sync"],
    problems: ["Manual processing causing delays.", "Lack of transparency for wholesale buyers.", "Disconnected legacy systems."],
    solutions: ["Automated procurement pipelines.", "Self-service client portals.", "Custom API connections to legacy databases."],
    features: [
      { title: "Secure Portals", description: "Role-based access for different client tiers.", iconName: "ShieldCheck" },
      { title: "System Bridging", description: "Data flow between web platforms and internal ERPs.", iconName: "Network" }
    ],
    deliverables: [{ title: "B2B Portal", description: "Secure login environment for clients." }, { title: "API Gateway", description: "Connectors for existing tools." }],
    technologies: [
      { name: "API Infrastructure", description: "Bridging legacy systems with modern interfaces." },
      { name: "Identity Access", description: "Role-based control and secure authentication." }
    ],
    transformationImpacts: [
      { title: "Processing Time", description: "Reduced through automated order routing." },
      { title: "Support Volume", description: "Decreased via transparent self-service portals." }
    ],
    operationalPreviews: [
      { title: "Lead Pipeline", type: "crm-pipeline", description: "Stages of client acquisition." },
      { title: "Transaction Volume", type: "metrics", description: "Monitoring daily B2B activity." }
    ],
    timeline: getBaseTimeline("b2b-systems"),
    ctaText: "Start Planning"
  },
  {
    slug: "hospitality",
    iconName: "Utensils",
    title: "Hospitality",
    subtitle: "Guest Experience Systems",
    heroTagline: "Operational systems engineered for dining and hospitality brands.",
    heroMetadata: ["Direct Reservations", "Guest CRM", "Staff Automation"],
    shortDescription: "Integrated booking, CRM, and management systems tailored for hotels and restaurants.",
    businessOutcomes: ["Frictionless booking", "Centralized guest data", "Operational clarity"],
    problems: ["High third-party commission fees.", "Fragmented guest information.", "Inefficient staff coordination."],
    solutions: ["Direct booking engines to retain revenue.", "Unified CRM for guest history.", "Automated task routing for staff."],
    features: [
      { title: "Booking Engine", description: "Custom reservation system with real-time availability.", iconName: "Calendar" },
      { title: "Unified CRM", description: "Comprehensive view of guest preferences.", iconName: "Users" }
    ],
    deliverables: [{ title: "Direct Booking Site", description: "Optimized consumer booking flow." }, { title: "Staff Backend", description: "Management interface for daily operations." }],
    technologies: [
      { name: "State Management", description: "Prevents double-bookings across properties." },
      { name: "Customer Data Vault", description: "Securely stores guest preferences." }
    ],
    transformationImpacts: [
      { title: "Commission Costs", description: "Reduced via direct-booking adoption." },
      { title: "Guest Loyalty", description: "Improved through personalized data utilization." }
    ],
    operationalPreviews: [
      { title: "Reservation Queue", type: "reservation-queue", description: "Live incoming booking requests." },
      { title: "Capacity Tracking", type: "dashboard", description: "Monitoring peak hour dining availability." }
    ],
    timeline: getBaseTimeline("hospitality"),
    ctaText: "Start Planning"
  },
  {
    slug: "agriculture",
    iconName: "Sprout",
    title: "Agriculture",
    subtitle: "Supply Chain & Operations",
    heroTagline: "Data-driven platforms for farm management and distribution.",
    heroMetadata: ["Distribution Logistics", "Inventory Movement", "Supply Visibility"],
    shortDescription: "Systems designed to track supply chains, manage operations, and connect with B2B distributors.",
    businessOutcomes: ["Clear supply chain visibility", "Accurate yield tracking", "Automated distribution"],
    problems: ["Limited visibility into logistics.", "Manual and inefficient record-keeping.", "Disconnects with wholesale buyers."],
    solutions: ["Dashboards for operational tracking.", "Digitized record workflows.", "Direct marketplace platforms."],
    features: [
      { title: "Operations Dashboard", description: "Clear visualization of daily logistics.", iconName: "LineChart" }
    ],
    deliverables: [{ title: "Management Hub", description: "Centralized interface for agricultural operations." }],
    technologies: [
      { name: "Data Ingestion", description: "Processing field and logistics data reliably." }
    ],
    transformationImpacts: [
      { title: "Logistics Visibility", description: "End-to-end tracking to reduce product loss." }
    ],
    operationalPreviews: [
      { title: "Supply Chain Route", type: "logistics-flow", description: "Visualizing delivery stages." },
      { title: "Yield Data", type: "metrics", description: "Monitoring production output." }
    ],
    timeline: getBaseTimeline("agriculture"),
    ctaText: "Start Planning"
  },
  {
    slug: "educare",
    iconName: "GraduationCap",
    title: "Educare",
    subtitle: "Learning Management Systems",
    heroTagline: "Scalable educational platforms for modern institutions.",
    heroMetadata: ["Admissions Automation", "Parent Portals", "LMS Integration"],
    shortDescription: "Secure platforms, student portals, and administrative dashboards for educational facilities.",
    businessOutcomes: ["Streamlined administration", "Clear student progress", "Secure data handling"],
    problems: ["Outdated student interfaces.", "Heavy administrative workload for enrollment.", "Poor visibility into student performance."],
    solutions: ["Frictionless student portals.", "Automated enrollment processes.", "Clear analytics dashboards for educators."],
    features: [
      { title: "Student Portal", description: "Accessible interface for course materials.", iconName: "UserCircle" }
    ],
    deliverables: [{ title: "LMS Platform", description: "Core learning management system." }],
    technologies: [
      { name: "Secure Storage", description: "Scalable handling of curriculum media." }
    ],
    transformationImpacts: [
      { title: "Administrative Burden", description: "Reduced through automated billing and enrollment." }
    ],
    operationalPreviews: [
      { title: "Student Progress", type: "lms-progress", description: "Tracking cohort performance." },
      { title: "Daily Roster", type: "list", description: "Active attendance records." }
    ],
    timeline: getBaseTimeline("educare"),
    ctaText: "Start Planning"
  },
  {
    slug: "healthcare",
    iconName: "Activity",
    title: "Healthcare",
    subtitle: "Compliant Medical Systems",
    heroTagline: "Secure architecture for clinic and patient management.",
    heroMetadata: ["Data Compliance", "Automated Scheduling", "Secure Records"],
    shortDescription: "Reliable patient portals and clinic management software focused on security and compliance.",
    businessOutcomes: ["Compliant data security", "Automated appointments", "Clear communication"],
    problems: ["Strict compliance requirements.", "Inefficient scheduling causing no-shows.", "Fragmented patient communication."],
    solutions: ["Architecture built for data security.", "Automated scheduling pipelines.", "Integrated secure messaging."],
    features: [
      { title: "Patient Portal", description: "Secure access to health records.", iconName: "Shield" }
    ],
    deliverables: [{ title: "Patient Interface", description: "Accessible web application for patients." }],
    technologies: [
      { name: "Secure Architecture", description: "Engineered for strict medical data standards." }
    ],
    transformationImpacts: [
      { title: "Patient No-Shows", description: "Reduced via automated reminder routing." }
    ],
    operationalPreviews: [
      { title: "Patient Queue", type: "reservation-queue", description: "Triage routing system." },
      { title: "System Health", type: "dashboard", description: "Monitoring platform stability." }
    ],
    timeline: getBaseTimeline("healthcare"),
    ctaText: "Start Planning"
  },
  {
    slug: "professional-services",
    iconName: "Briefcase",
    title: "Professional Services",
    subtitle: "Client Portals & Automation",
    heroTagline: "Digital infrastructure for agencies and consultancies.",
    heroMetadata: ["Client Portals", "Document Automation", "Secure Messaging"],
    shortDescription: "Systems designed to manage clients, secure documents, and automate onboarding at scale.",
    businessOutcomes: ["Professional client experience", "Automated processing", "Centralized communication"],
    problems: ["Scattered communication threads.", "Manual onboarding wasting billable time.", "Inconsistent digital presence."],
    solutions: ["Centralized client hubs.", "Automated data collection pipelines.", "Professional visual identity."],
    features: [
      { title: "Client Hub", description: "A single location for secure file access.", iconName: "FolderLock" }
    ],
    deliverables: [{ title: "Client Portal", description: "Secure login area for active clients." }],
    technologies: [
      { name: "Document APIs", description: "Automates standard contract creation." }
    ],
    transformationImpacts: [
      { title: "Billable Time", description: "Increased by removing administrative data entry." }
    ],
    operationalPreviews: [
      { title: "Onboarding Flow", type: "pipeline", description: "Automated document collection." },
      { title: "Access Logs", type: "list", description: "Secure file activity." }
    ],
    timeline: getBaseTimeline("professional-services"),
    ctaText: "Start Planning"
  },
  {
    slug: "saas-platforms",
    iconName: "CloudCog",
    title: "SaaS Platforms",
    subtitle: "Scalable Software Products",
    heroTagline: "Architecture for growing software products.",
    heroMetadata: ["Multi-Tenant Data", "Subscription Billing", "High Availability"],
    shortDescription: "End-to-end development and architecture for Software as a Service products.",
    businessOutcomes: ["Multi-tenant security", "Automated billing", "Stable infrastructure"],
    problems: ["Scaling multi-tenant architecture.", "Complex subscription logic.", "Difficult feature iteration."],
    solutions: ["Robust database design.", "Integrated automated billing.", "Modular architecture for fast deployment."],
    features: [
      { title: "Multi-Tenancy", description: "Secure data isolation per client.", iconName: "Database" },
      { title: "Subscription Engine", description: "Automated billing and tier management.", iconName: "CreditCard" }
    ],
    deliverables: [{ title: "SaaS Application", description: "The core software product." }, { title: "Admin Panel", description: "Internal management tool." }],
    technologies: [
      { name: "Multi-Tenant Architecture", description: "Isolates data securely for users." },
      { name: "Billing Infrastructure", description: "Automated logic for upgrades and revenue tracking." }
    ],
    transformationImpacts: [
      { title: "Scaling Constraints", description: "Removed through flexible infrastructure." },
      { title: "Billing Overhead", description: "Eliminated via programmatic integrations." }
    ],
    operationalPreviews: [
      { title: "Tenant Health", type: "metrics", description: "Organization telemetry." },
      { title: "Billing Logs", type: "list", description: "Automated webhook activity." }
    ],
    timeline: getBaseTimeline("saas-platforms"),
    ctaText: "Start Planning"
  }
];
