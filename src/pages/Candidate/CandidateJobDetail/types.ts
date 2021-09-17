import { JobdetailObjectTypes } from "../../../redux";

export interface CandidateJobDetailPropTypes {
  activeJob: JobdetailObjectTypes;
  fetchJobDetail: (e: string) => void;
}
