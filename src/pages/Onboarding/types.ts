export interface CandidateOnboardingPropTypes {
  saveCandidateData: (e: CandidateSubmitTypes, history: any) => void;
  skills: string[];
  cities: string[];
  fetchCanProfile: () => void;
}

export interface CandidateSubmitTypes {
  about: string;
  ctc: string;
  email: string;
  exp: string;
  githubUrl: string;
  jobTitle: string;
  location: string;
  name: string;
  skills?: string[] | string;
  whatsappNumber?: string;
  fetchCandidateDetails: (e: string) => void;
  gitskills: string[];
  skillsOrder: number[];
  repoCount?: any;
}

export interface RecruiterOnboardingPropTypes {
  saveRecruiterData: (e: RecruitereSubmitTypes, history: any) => void;
  skills: string[];
  cities: string[];
}

export interface RecruitereSubmitTypes {
  about: string;
  location: string;
  name: string;
  skills?: string[] | string;
  whatsappNumber?: string;
  empSize: number;
  preferredIndustry: string;
  site: string;
}
