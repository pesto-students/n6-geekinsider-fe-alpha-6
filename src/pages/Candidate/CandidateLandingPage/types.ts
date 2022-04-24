import { CandidateProfileDetailsTypes, JobObjectTypes } from "../../../redux";

export interface CandidateLandingPagePropTypes {
  handleProfileClick: () => void;
  fetchCanProfile: () => void;
  profileDetails: CandidateProfileDetailsTypes;
}

export interface TrendingJobsPropTypes {
  trendingJobs: JobObjectTypes[];
  fetchTrendingJobs: () => void;
}
