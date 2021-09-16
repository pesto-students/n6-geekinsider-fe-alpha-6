import { JobdetailObjectTypes } from "../../../redux";

export interface CandidateJobDetailPropTypes {
  activeJob: JobdetailObjectTypes;
  match: any;
  fetchJobDetail: (e: string) => void;
}
