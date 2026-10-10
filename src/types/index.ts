export type Language = 'en' | 'mr' | 'hi';

export type CategoryId =
  | 'water'
  | 'electricity'
  | 'roads'
  | 'education'
  | 'agriculture'
  | 'housing'
  | 'healthcare'
  | 'pension'
  | 'schemes'
  | 'employment'
  | 'documents'
  | 'sanitation'
  | 'digital_services'
  | 'civic_issues';

export type UrgencyLevel = 'low' | 'medium' | 'high' | 'critical';

export interface Category {
  id: CategoryId;
  name: {
    en: string;
    mr: string;
    hi: string;
  };
  description: {
    en: string;
    mr: string;
    hi: string;
  };
  iconName: string;
  department: {
    en: string;
    mr: string;
    hi: string;
  };
}

export interface Scheme {
  id: string;
  name: {
    en: string;
    mr: string;
    hi: string;
  };
  shortCode: string;
  category: CategoryId;
  level: 'Central' | 'State' | 'District' | 'Gram Panchayat';
  description: {
    en: string;
    mr: string;
    hi: string;
  };
  eligibility: {
    en: string[];
    mr: string[];
    hi: string[];
  };
  requiredDocuments: {
    en: string[];
    mr: string[];
    hi: string[];
  };
  steps: {
    en: string[];
    mr: string[];
    hi: string[];
  };
  department: {
    en: string;
    mr: string;
    hi: string;
  };
  officerRole: {
    en: string;
    mr: string;
    hi: string;
  };
  officialPortal: string;
  isDemoData: boolean;
}

export interface ExplainabilityFactor {
  title: string;
  description: string;
  type: 'keyword' | 'category' | 'location' | 'demographic' | 'urgency';
}

export interface ProblemAnalysis {
  id: string;
  userInput: string;
  detectedLanguage: Language;
  primaryCategory: CategoryId;
  confidenceScore: number; // 0 to 100
  urgency: UrgencyLevel;
  summary: {
    en: string;
    mr: string;
    hi: string;
  };
  keywordsExtracted: string[];
  matchedScheme?: Scheme;
  explainability: {
    factors: ExplainabilityFactor[];
    whyRecommended: {
      en: string;
      mr: string;
      hi: string;
    };
  };
  actionPlan: {
    stepNumber: number;
    title: {
      en: string;
      mr: string;
      hi: string;
    };
    description: {
      en: string;
      mr: string;
      hi: string;
    };
    timeframe: string;
    department: string;
  }[];
  requiredDocuments: string[];
  targetDepartment: {
    en: string;
    mr: string;
    hi: string;
  };
  targetOfficer: {
    en: string;
    mr: string;
    hi: string;
  };
  citizenDetails?: {
    name?: string;
    state?: string;
    district?: string;
    village?: string;
    occupation?: string;
    incomeRange?: string;
    demographicTag?: string;
  };
  timestamp: string;
}

export type ComplaintStatus = 'submitted' | 'forwarded' | 'under_review' | 'action_taken' | 'resolved';

export interface TimelineEvent {
  status: ComplaintStatus;
  date: string;
  title: string;
  description: string;
  officerOrOffice?: string;
}

export interface Complaint {
  id: string; // e.g. GS-2026-00124
  citizenName: string;
  citizenPhone?: string;
  problemSummary: string;
  category: CategoryId;
  department: string;
  village: string;
  district: string;
  state: string;
  status: ComplaintStatus;
  urgency: UrgencyLevel;
  submissionDate: string;
  lastUpdated: string;
  timeline: TimelineEvent[];
  schemeAssociated?: string;
  citizenNotes?: string[];
  isDemoData: boolean;
}

export interface SampleProblem {
  id: string;
  language: Language;
  text: string;
  category: CategoryId;
  label: string;
  district: string;
  village: string;
}
