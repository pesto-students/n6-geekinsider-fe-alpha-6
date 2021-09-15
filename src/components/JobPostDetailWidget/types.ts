import { SearchType } from "../../redux";

export interface JobPostDetailWidgetPropTypes {
    jobTitle: string, 
    skills: any, 
    jobLocation: string, 
    ctc: number, 
    exp: number, 
    jobDescription: string, 
    companyName: string,
    applyForJob: (id: string) => void,
    searchType: SearchType,
    jobslug: string,
    fetchSearchJobDetail: (e: string) => void
}