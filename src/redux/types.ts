import { RecentJobType, SingleWidgetTypes } from "../pages/Recruiter/LandingPage";
import { UserTypeTypes } from "../routes";

export type SearchType =
  | "recommended"
  | "trending"
  | "companySearch"
  | "skillSearch";

export interface CompanySearchType {
  companyName: string;
  ctc: number;
  exp: number;
  jobDescription: string;
  jobLocation: string;
  jobTitle: string;
  jobslug: string;
  skills: string[];
}
export interface StateTypes {
  userType: UserTypeTypes;
  isAuth: boolean;
  profileDetails: any;
  loading: boolean;
  recentJobs: RecentJobType[];
  skillSearch: JobObjectTypes[];
  trendingJobs: JobObjectTypes[];
  recommendedJobs: JobObjectTypes[];
  activeJob: any;
  jobDetailModalVisible: boolean;
  recommendedCandidates: SingleWidgetTypes[];
  recruiterCandidateDetails: any;
  searchType: SearchType;
  companySearch: JobObjectTypes[];
  appliedCandidates: SingleWidgetTypes[];
  skills: string[];
  cities: string[];
}

export interface actionTypes {
  type: string;
  payload: any;
}

export type DispatchType = (e: actionTypes) => void;

export interface ProfileDetailsTypes {
  about?: string;
  empSize?: number;
  location?: string;
  name?: string;
  site?: string;
  skills?: string[];
  whatsappNumber?: string;
}

export interface JobObjectTypes {
  canApplied: any;
  companyId: string;
  companyName: string;
  jobStatus: boolean;
  jobTitle: string;
  jobslug: string;
  skills: string[];
}

export interface JobdetailObjectTypes {
  companyName: string;
  ctc: number;
  exp: number;
  jobDescription: string;
  jobLocation: string;
  jobTitle: string;
  jobslug: string;
  skills: string[];
}

export interface CandidateProfileDetailsTypes {
  about: string;
  ctc: string;
  exp: string;
  githubUrl: string;
  jobTitle: string;
  location: string;
  name: string;
  skills: string[];
  whatsappNumber: string;
}
