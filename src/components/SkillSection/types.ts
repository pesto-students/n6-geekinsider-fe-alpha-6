export interface GitInfoType {
    repoCount: number;
    skills: string[];
    skillsOrder: number[];
}

export interface SkillSectionPropTypes {
    gitInfo: GitInfoType;
}