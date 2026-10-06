/**
 * Type definitions matching the City of Edmonton
 * City Operations Annual Service Plan (ASP) Content Template
 */

export interface ManagerMessage {
  name: string;
  title: string;
  photoUrl?: string;
  paragraphs: string[];
  signatureText?: string;
}

export interface ImpactMetric {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  decimals?: number;
}

export interface ActionItem {
  title: string;
  description: string;
  icon?: string;
}

export interface PerformanceMetric {
  measure: string;
  target: string;
  result: string;
  status: '✅' | '⬇️' | '🔄';
  statusColor?: string;
}

export interface BreakoutBox {
  type: 'split' | 'split-reverse' | 'full-image';
  eyebrowTag?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  bgColor?: string;
  textColor?: string;
}

export interface ObjectiveResult {
  id: string;
  title: string;
  description: string;
  actions: ActionItem[];
  metricsTitle: string;
  metrics: PerformanceMetric[];
  breakoutBox?: BreakoutBox;
}

export interface LookingAheadAction {
  title: string;
  frontSummary: string;
  backDetailedSummary: string;
  iconName?: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  actions: LookingAheadAction[];
}

export interface SectionCompletion {
  managerMessage: boolean;
  impactMetrics: boolean;
  results2025: boolean;
  lookingAhead2026: boolean;
}

export interface BranchPlan {
  id: string;
  slug: string;
  branchName: string;
  shortName: string;
  tagline: string;
  accentColor: string; // Hex color code for branding
  accentLight: string;
  accentDark: string;
  heroImage?: string;
  completion: SectionCompletion;
  isSkeleton: boolean;
  
  // Section 1: Branch Manager Message
  managerMessage: ManagerMessage;
  
  // Section 2: Key Impact Metrics
  metrics: ImpactMetric[];
  
  // Section 3: Results from 2025
  results: ObjectiveResult[];
  
  // Section 4: Looking Ahead to 2026
  focusAreas: FocusArea[];
}

export interface DepartmentInfo {
  departmentName: string;
  parentOrganization: string;
  cycle: string;
  mission: string;
  vision: string;
  coreValues: { title: string; desc: string }[];
  strategicPriorities: { title: string; desc: string }[];
}
