import { IndustryService, TimelineStage } from "@/types/service";

const getBaseTimeline = (industrySlug: string): TimelineStage[] => {
  if (industrySlug === "b2c-ecommerce") {
    return [
      {
        id: "t1",
        title: "Infrastructure Consulting",
        objective: "Audit existing supply chain endpoints and map high-availability data pipelines for automated inventory routing.",
        businessImpact: "Mitigates operational downtime during deployment and guarantees synchronous stock tracking.",
        duration: "2 Weeks",
        status: "completed",
        clientReviewStatus: "Verified",
        operationalNotes: "Legacy POS endpoints audited. Supply chain bottlenecks identified.",
        deliverables: ["Infrastructure Blueprint", "Data Routing Strategy"]
      },
      {
        id: "t2",
        title: "Interface Architecture",
        objective: "Engineer frictionless, conversion-optimized transactional interfaces built on headless architecture.",
        businessImpact: "Accelerates path-to-purchase and improves mobile conversion velocity.",
        duration: "3 Weeks",
        status: "completed",
        clientReviewStatus: "Verified",
        operationalNotes: "Checkout routing optimized for concurrent high-volume transactions.",
        deliverables: ["Interactive Prototypes", "Component Design System"]
      },
      {
        id: "t3",
        title: "Core Engineering",
        objective: "Construct the digital storefront environment and connect decoupled API pipelines for real-time order processing.",
        businessImpact: "Establishes a highly resilient operational core capable of absorbing traffic spikes.",
        duration: "5 Weeks",
        status: "active",
        clientReviewStatus: "Client Validation Required",
        operationalNotes: "Deploying webhook infrastructure for real-time inventory synchronization.",
        deliverables: ["Decoupled Frontend", "API Gateway Integration", "Staging Environment"]
      },
      {
        id: "t4",
        title: "Quality Assurance & Load Testing",
        objective: "Execute rigorous concurrency simulations and penetration testing across all financial data pipelines.",
        businessImpact: "Secures transactional integrity and hardens the platform against latency.",
        duration: "2 Weeks",
        status: "upcoming",
        clientReviewStatus: "Awaiting Feature Sign-off",
        operationalNotes: "Simulating peak-hour traffic against the payment routing layer.",
        deliverables: ["Telemetry & Load Report", "Security Clearance Certification"]
      },
      {
        id: "t5",
        title: "Production Deployment",
        objective: "Execute a phased, zero-downtime migration to the new cloud infrastructure with continuous telemetry monitoring.",
        businessImpact: "Immediate realization of sub-second load times and unified data flow.",
        duration: "1 Week",
        status: "upcoming",
        clientReviewStatus: "Deployment Ready",
        operationalNotes: "DNS routing adjustments scheduled for off-peak maintenance window.",
        deliverables: ["Live Production Environment", "Operational Runbooks"]
      }
    ];
  }

  // Generic enterprise timeline mapping for all other industries
  return [
    {
      id: "t1",
      title: "Infrastructure Consulting",
      objective: "Audit legacy workflows to architect resilient, automated data pipelines tailored to your organizational scale.",
      businessImpact: "Isolates operational risk during migration and maps a precise trajectory for digital transformation.",
      duration: "2 Weeks",
      status: "completed",
      clientReviewStatus: "Verified",
      operationalNotes: "Identified high-latency processing bottlenecks in legacy CRM endpoints.",
      deliverables: ["Systems Architecture Blueprint", "Workflow Telemetry Diagrams"]
    },
    {
      id: "t2",
      title: "Interface Architecture",
      objective: "Engineer high-density, low-latency operator interfaces designed to eliminate cognitive friction for staff.",
      businessImpact: "Accelerates internal adoption velocity and dramatically reduces onboarding overhead.",
      duration: "3 Weeks",
      status: "completed",
      clientReviewStatus: "Verified",
      operationalNotes: "Prioritizing data density, strict typographical hierarchy, and rapid action routing.",
      deliverables: ["Interactive Prototypes", "Component Design System"]
    },
    {
      id: "t3",
      title: "Core Engineering",
      objective: "Build the foundational microservices and establish secure, encrypted data bridges across legacy and modern endpoints.",
      businessImpact: "Deploys a robust, highly available environment capable of autonomous operational scaling.",
      duration: "6 Weeks",
      status: "active",
      clientReviewStatus: "Awaiting Design Approval",
      operationalNotes: "Developing asynchronous event-driven API bridges for state management.",
      deliverables: ["Staging Environment", "Database Schema & Indexing Logic"]
    },
    {
      id: "t4",
      title: "Quality Assurance & Security",
      objective: "Conduct penetration testing and validate strict data compliance across all integration layers.",
      businessImpact: "Guarantees absolute system resilience and zero-trust security compliance.",
      duration: "2 Weeks",
      status: "upcoming",
      clientReviewStatus: "Awaiting Feature Sign-off",
      operationalNotes: "Reviewing JWT authentication protocols and rate-limiting middleware.",
      deliverables: ["QA Telemetry Verification", "Security Compliance Certification"]
    },
    {
      id: "t5",
      title: "Production Deployment",
      objective: "Execute a controlled, phased deployment to production infrastructure with continuous health telemetry.",
      businessImpact: "Enables seamless enterprise scaling with zero interruption to existing client services.",
      duration: "1 Week",
      status: "upcoming",
      clientReviewStatus: "Deployment Ready",
      operationalNotes: "Phased traffic routing starting with internal QA teams before general availability.",
      deliverables: ["Live Production Release", "Technical Operational Runbooks"]
    }
  ];
};

export const industries: IndustryService[] = [
  {
    slug: "b2c-ecommerce",
    iconName: "ShoppingCart",
    title: "B2C Commerce",
    subtitle: "Commerce Intelligence Infrastructure",
    heroTagline: "Real-time retail telemetry and conversion optimization systems.",
    heroMetadata: ["Live Conversion Dashboards", "Inventory Synchronization", "Checkout Infrastructure"],
    shortDescription: "Robust digital storefront architecture and decoupled backend environments built for high-volume operational conversion logic.",
    businessOutcomes: ["Accelerated conversion velocity", "Synchronous inventory mapping", "Sub-second path-to-purchase latency"],
    problems: ["Cart abandonment driven by architectural latency.", "Disconnected inventory nodes resulting in supply drift.", "Generic monolithic customer routing."],
    solutions: ["Decoupled, headless infrastructure for immediate execution.", "Unified database ledgers synchronizing POS and digital endpoints.", "Behavioral commerce routing engines."],
    features: [
      { title: "Decoupled Architecture", description: "Separated infrastructural layers for sub-second page delivery.", iconName: "Zap" },
      { title: "Inventory Telemetry", description: "Continuous stock synchronization across distributed sales channels.", iconName: "Database" },
      { title: "Behavioral Routing", description: "Automated, algorithmic user traversal paths.", iconName: "Bot" }
    ],
    deliverables: [{ title: "Conversion Engine", description: "High-performance frontend interface." }, { title: "Operations Dashboard", description: "Centralized node management for products." }],
    technologies: [
      { name: "Asynchronous Frontends", description: "Instantaneous static and dynamic state delivery." },
      { name: "Distributed Ledgers", description: "Secure, highly available databases for order routing." }
    ],
    transformationImpacts: [
      { title: "Abandonment Friction", description: "Minimized through optimized interface routing." },
      { title: "Inventory Desync", description: "Eliminated via omni-channel automated ledgers." }
    ],
    operationalPreviews: [
      { title: "Order Fulfillment Pipeline", type: "pipeline", description: "Tracking active transactional states." },
      { title: "Inventory Telemetry", type: "metrics", description: "Real-time stock depletion tracking." }
    ],
    timeline: getBaseTimeline("b2c-ecommerce"),
    ctaText: "Deploy Commerce Systems"
  },
  {
    slug: "b2b-systems",
    iconName: "Building2",
    title: "B2B Systems",
    subtitle: "Enterprise Workflow Orchestration",
    heroTagline: "Secure operational lead routing and CRM intelligence.",
    heroMetadata: ["Automated Workflow Pipelines", "Enterprise Analytics", "Lead Processing Systems"],
    shortDescription: "Resilient backend platforms designed to automate wholesale operations, enterprise logistics, and CRM data flow.",
    businessOutcomes: ["Automated enterprise routing", "Encrypted data exchange", "Synchronized CRM pipelines"],
    problems: ["Manual state processing creating latency bottlenecks.", "Opaque visibility across B2B transaction endpoints.", "Disconnected, legacy enterprise resource planners."],
    solutions: ["Automated algorithmic procurement pipelines.", "Role-based intelligence dashboards for stakeholders.", "Secure API orchestration bridging legacy environments."],
    features: [
      { title: "Encrypted Portals", description: "Tiered access authentication for enterprise nodes.", iconName: "ShieldCheck" },
      { title: "System Orchestration", description: "Continuous automated data exchange between web endpoints and internal ERPs.", iconName: "Network" }
    ],
    deliverables: [{ title: "Enterprise Hub", description: "Authenticated operational environment for clients." }, { title: "API Gateway", description: "Secure data connectors mapping to legacy toolchains." }],
    technologies: [
      { name: "API Infrastructure", description: "Bridging legacy environments with modern cloud architecture." },
      { name: "Identity Access Logic", description: "Granular, role-based state control and zero-trust authentication." }
    ],
    transformationImpacts: [
      { title: "Processing Latency", description: "Reduced through continuous automated lead routing." },
      { title: "Support Overhead", description: "Decreased via transparent self-service operational portals." }
    ],
    operationalPreviews: [
      { title: "Lead Qualification Pipeline", type: "crm-pipeline", description: "Automated state routing of B2B procurement requests." },
      { title: "System Throughput", type: "metrics", description: "Monitoring high-volume API transaction exchange." }
    ],
    timeline: getBaseTimeline("b2b-systems"),
    ctaText: "Initialize Orchestration"
  },
  {
    slug: "hospitality",
    iconName: "Utensils",
    title: "Hospitality",
    subtitle: "Occupancy Intelligence Systems",
    heroTagline: "Reservation orchestration and kitchen workflow coordination.",
    heroMetadata: ["Live Occupancy Telemetry", "Dining Operations Systems", "Reservation Queues"],
    shortDescription: "Integrated booking infrastructure, guest data ledgers, and automated staff dispatching systems.",
    businessOutcomes: ["Frictionless pipeline booking", "Centralized operational intelligence", "Automated staff workflows"],
    problems: ["Overreliance on third-party aggregation logic.", "Fragmented, siloed guest interaction data.", "Inefficient asynchronous staff coordination."],
    solutions: ["Direct pipeline reservation engines to maximize revenue retention.", "Unified data ledger for guest intelligence.", "Algorithmic task routing for hospitality staff."],
    features: [
      { title: "Orchestration Engine", description: "Custom reservation backend maintaining real-time occupancy state.", iconName: "Calendar" },
      { title: "Intelligence CRM", description: "Unified relational view of continuous guest interactions.", iconName: "Users" }
    ],
    deliverables: [{ title: "Reservation Pipeline", description: "Optimized consumer transactional flow." }, { title: "Operations Console", description: "Administrative interface for active telemetry." }],
    technologies: [
      { name: "State Management", description: "Concurrent processing preventing collision in bookings." },
      { name: "Encrypted Data Vault", description: "Secure storage architecture for guest preferences." }
    ],
    transformationImpacts: [
      { title: "Dependency Overhead", description: "Reduced via direct-infrastructure adoption." },
      { title: "Guest Intelligence", description: "Maximized through continuous personalized data mapping." }
    ],
    operationalPreviews: [
      { title: "Reservation Routing", type: "reservation-queue", description: "Real-time automated table state allocation." },
      { title: "Capacity Telemetry", type: "dashboard", description: "Monitoring dynamic peak-hour dining availability." }
    ],
    timeline: getBaseTimeline("hospitality"),
    ctaText: "Deploy Hospitality OS"
  },
  {
    slug: "agriculture",
    iconName: "Sprout",
    title: "Agriculture",
    subtitle: "Agricultural Logistics Telemetry",
    heroTagline: "Distributor coordination and crop yield monitoring systems.",
    heroMetadata: ["Yield Monitoring", "Supply Chain Analytics", "Logistics Pipelines"],
    shortDescription: "Data-driven infrastructural systems designed to track environmental yields, map logistics, and connect with B2B distribution nodes.",
    businessOutcomes: ["Transparent logistics telemetry", "Algorithmic yield tracking", "Automated distribution routing"],
    problems: ["Opaque visibility into global logistics environments.", "Manual, high-latency operational record-keeping.", "Asynchronous connections with wholesale distribution nodes."],
    solutions: ["Real-time dashboards for continuous operational tracking.", "Digitized workflow logic for record maintenance.", "Direct API-driven marketplace environments."],
    features: [
      { title: "Telemetry Dashboard", description: "Live visualization of continuous supply chain logistics.", iconName: "LineChart" }
    ],
    deliverables: [{ title: "Logistics Hub", description: "Centralized operational interface for agricultural nodes." }],
    technologies: [
      { name: "Telemetry Ingestion", description: "Real-time processing of environmental and logistics variables." }
    ],
    transformationImpacts: [
      { title: "Supply Visibility", description: "Continuous end-to-end tracking to mitigate infrastructural loss." }
    ],
    operationalPreviews: [
      { title: "Logistics State", type: "logistics-flow", description: "Visualizing automated supply chain progression." },
      { title: "Production Output", type: "metrics", description: "Monitoring active algorithmic yield predictions." }
    ],
    timeline: getBaseTimeline("agriculture"),
    ctaText: "Initialize Telemetry"
  },
  {
    slug: "educare",
    iconName: "GraduationCap",
    title: "Educare",
    subtitle: "Academic Operations Infrastructure",
    heroTagline: "Automated admissions orchestration and learning telemetry.",
    heroMetadata: ["Classroom Telemetry", "Enrollment Pipelines", "Institutional Analytics"],
    shortDescription: "Enterprise-grade operational environments engineered for high-volume academic institutions and faculty coordination.",
    businessOutcomes: ["Synchronized data pipelines", "Real-time cohort insights", "Automated student lifecycles"],
    problems: ["Fragmented enrollment pipelines causing institutional latency.", "Siloed faculty coordination and manual academic records.", "Lack of real-time telemetry on student lifecycle progression."],
    solutions: ["Unified academic operations infrastructure.", "Automated admissions orchestration pipelines.", "Centralized institutional analytics and LMS integration."],
    features: [
      { title: "Enrollment Pipeline", description: "Automated state routing for admissions processing.", iconName: "Route" },
      { title: "Institutional Analytics", description: "Real-time visualization of cohort progression.", iconName: "LineChart" },
      { title: "Faculty Coordination", description: "Synchronized administrative infrastructure.", iconName: "Network" }
    ],
    deliverables: [{ title: "Academic OS", description: "Core institutional operating system." }, { title: "Telemetry Hub", description: "Centralized tracking dashboard." }],
    technologies: [
      { name: "State Orchestration", description: "Secure, concurrent processing of academic states." },
      { name: "Data Aggregation", description: "Real-time syncing of cohort telemetry." }
    ],
    transformationImpacts: [
      { title: "Administrative Latency", description: "Eliminated via automated student lifecycle routing." },
      { title: "Institutional Silos", description: "Resolved through unified cross-department infrastructure." }
    ],
    operationalPreviews: [
      { title: "Admissions Pipeline", type: "list", description: "Automated queue state traversal." },
      { title: "Cohort Telemetry", type: "lms-progress", description: "Real-time academic throughput." }
    ],
    timeline: getBaseTimeline("educare"),
    ctaText: "Deploy Infrastructure"
  },
  {
    slug: "healthcare",
    iconName: "Activity",
    title: "Healthcare",
    subtitle: "Clinical Systems Telemetry",
    heroTagline: "Patient coordination infrastructure and operational healthcare systems.",
    heroMetadata: ["Patient Pipelines", "Operational Monitoring", "Scheduling Telemetry"],
    shortDescription: "Highly available patient orchestration portals and clinic management architectures demanding absolute security and zero-trust compliance.",
    businessOutcomes: ["Zero-trust data compliance", "Automated pipeline scheduling", "Synchronous operational communication"],
    problems: ["Complex, rigid data compliance bottlenecks.", "High-latency scheduling logic inducing operational gaps.", "Fragmented and asynchronous patient communication."],
    solutions: ["Systems engineered exclusively for strict zero-trust data compliance.", "Automated, algorithmic scheduling pipelines.", "Integrated, encrypted messaging protocols."],
    features: [
      { title: "Encrypted Portal", description: "Zero-trust access gateway to health records.", iconName: "Shield" }
    ],
    deliverables: [{ title: "Patient Interface", description: "Accessible, compliant web environment for users." }],
    technologies: [
      { name: "Zero-Trust Architecture", description: "Engineered specifically for medical compliance limits." }
    ],
    transformationImpacts: [
      { title: "Scheduling Gaps", description: "Mitigated via automated reminder telemetry routing." }
    ],
    operationalPreviews: [
      { title: "Triage Routing Pipeline", type: "reservation-queue", description: "Automated patient state management." },
      { title: "System Health Limits", type: "dashboard", description: "Monitoring continuous platform stability constraints." }
    ],
    timeline: getBaseTimeline("healthcare"),
    ctaText: "Launch Medical Systems"
  },
  {
    slug: "professional-services",
    iconName: "Briefcase",
    title: "Professional Services",
    subtitle: "Strategic Workflow Management",
    heroTagline: "Enterprise consulting infrastructure and operational coordination.",
    heroMetadata: ["Service Pipelines", "Client Coordination", "Reporting Dashboards"],
    shortDescription: "Systems designed to orchestrate client states, encrypt document transfers, and automate onboarding lifecycles at scale.",
    businessOutcomes: ["Synchronized client interactions", "Automated lifecycle processing", "Centralized operational communication"],
    problems: ["Asynchronous and scattered communication protocols.", "Manual operational workflows consuming billable bandwidth.", "Inconsistent digital environmental presence."],
    solutions: ["Centralized, secure operational hubs.", "Automated asynchronous data collection pipelines.", "Unified visual intelligence design."],
    features: [
      { title: "Operational Hub", description: "A secure, encrypted environment for file exchange.", iconName: "FolderLock" }
    ],
    deliverables: [{ title: "Client Environment", description: "Secure state-managed portal for active interactions." }],
    technologies: [
      { name: "Documentation APIs", description: "Programmatic generation of standard contract assets." }
    ],
    transformationImpacts: [
      { title: "Billable Bandwidth", description: "Reclaimed by eliminating manual administrative execution." }
    ],
    operationalPreviews: [
      { title: "Lifecycle Pipeline", type: "pipeline", description: "Automated KYC and data ingestion workflow." },
      { title: "Encrypted Access Logs", type: "list", description: "Continuous file retrieval telemetry." }
    ],
    timeline: getBaseTimeline("professional-services"),
    ctaText: "Deploy Agency Systems"
  },
  {
    slug: "saas-platforms",
    iconName: "CloudCog",
    title: "SaaS Platforms",
    subtitle: "Distributed Infrastructure Monitoring",
    heroTagline: "Tenant orchestration and platform telemetry scaling.",
    heroMetadata: ["Deployment Topology", "Infrastructure Nodes", "API Monitoring"],
    shortDescription: "End-to-end architectural engineering and DevOps deployment for scalable Software as a Service ecosystems.",
    businessOutcomes: ["Isolated multi-tenant security", "Programmatic billing algorithms", "Highly available infrastructure"],
    problems: ["Scaling latency in multi-tenant architectural constraints.", "Rigid, monolithic subscription logic.", "High-friction environments hindering feature velocity."],
    solutions: ["Distributed, robust schema design for scale.", "Integrated algorithmic logic for automated billing.", "Modular microservice architecture enabling rapid deployment."],
    features: [
      { title: "Tenant Isolation", description: "Secure logical data separation at the database layer.", iconName: "Database" },
      { title: "Algorithmic Billing", description: "Programmatic tier mapping and logic resolution.", iconName: "CreditCard" }
    ],
    deliverables: [{ title: "Core SaaS Engine", description: "The central computational product." }, { title: "Telemetry Dashboard", description: "Internal operations and monitoring node." }],
    technologies: [
      { name: "Distributed Environments", description: "Secure, highly available deployment topologies." },
      { name: "Revenue Infrastructure", description: "Automated webhook ingestion for financial operations." }
    ],
    transformationImpacts: [
      { title: "Scaling Friction", description: "Eliminated through modular infrastructural pipelines." },
      { title: "Financial Latency", description: "Mitigated via programmatic API resolution." }
    ],
    operationalPreviews: [
      { title: "Node Health", type: "metrics", description: "Organizational CPU and memory utilization logic." },
      { title: "Webhook Telemetry", type: "list", description: "Live asynchronous event tracking for billing." }
    ],
    timeline: getBaseTimeline("saas-platforms"),
    ctaText: "Architect Infrastructure"
  }
];
