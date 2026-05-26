export interface TimelineStage {
  id: string;
  title: string;
  objective: string;
  businessImpact: string; // the human/business-oriented explanation
  duration: string;
  status: "completed" | "active" | "upcoming";
  clientReviewStatus?: "Client Validation Required" | "Awaiting Design Approval" | "Awaiting Feature Sign-off" | "Deployment Ready" | "Verified";
  operationalNotes?: string;
  deliverables: string[];
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface DeliverableItem {
  title: string;
  description: string;
}

export interface TechnologyItem {
  name: string;
  description: string;
}

export interface TransformationImpact {
  title: string;
  description: string;
}

export interface OperationalPreview {
  title: string;
  type: "reservation-queue" | "lms-progress" | "logistics-flow" | "crm-pipeline" | "dashboard" | "metrics" | "pipeline" | "list";
  description: string;
}

export interface IndustryService {
  slug: string;
  iconName: string;
  title: string;
  subtitle: string;
  heroTagline: string;
  heroMetadata: string[];
  heroImage?: string;
  shortDescription: string;
  businessOutcomes: string[];
  problems: string[];
  solutions: string[];
  features: FeatureItem[];
  deliverables: DeliverableItem[];
  technologies: TechnologyItem[];
  transformationImpacts: TransformationImpact[];
  operationalPreviews?: OperationalPreview[];
  timeline: TimelineStage[];
  ctaText: string;
}
