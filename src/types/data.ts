export type VerificationStatus = 
  | 'VERIFIED'
  | 'REPORTED'
  | 'ESTIMATED'
  | 'OUR EXPERIMENT'
  | 'PENDING VERIFICATION';

export type SourceType = 
  | 'Court Order'
  | 'Government'
  | 'Research Paper'
  | 'News'
  | 'Industry';

export interface Source {
  id: string;
  title: string;
  organization: string;
  year: number;
  type: SourceType;
  url: string;
  primary: boolean;
}

export interface Claim {
  id: string;
  claim: string;
  value: string;
  period?: string;
  year?: number;
  sourceId: string;
  type: string;
  status: VerificationStatus;
  verified: boolean;
  notes?: string;
}

export interface CaseStudy {
  id: string;
  caseNumber: string;
  title: string;
  year: number;
  location: string;
  attackType: string;
  description: string;
  impact: string;
  technology: string;
  sourceId: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  author: string;
  year: number;
  type: string;
  topic: string;
  sourceId: string;
  summary: string;
  relevance: string;
}
