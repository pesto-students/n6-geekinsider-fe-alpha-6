import React from "react";
import { Progress } from "antd";

interface SkillSectionPropTypes {
  gitInfo: { 
    repoCount: number;
    skills: string[];
    skillsOrder: number[];
  };
}

const SkillSection: React.FC<SkillSectionPropTypes> = (props) => {
  const { gitInfo } = props;
  const { repoCount, skills, skillsOrder } = gitInfo;
  return (
    <>
      <section className="skills-section">
        <h3>
          <b>Skills</b>
        </h3>
        {skills.map((itm: string, index: number) => {
          return (
            <>
              <span>{itm}</span>
              <Progress
                percent={skillsOrder[index]}
                showInfo={false}
                strokeColor="#F2EE8B"
              />
            </>
          );
        })}
      </section>
      <section className="github-repo-section">
        <h3>
          <b>Github repo count</b>
        </h3>
        <h2>{repoCount}</h2>
      </section>
    </>
  );
};

export default SkillSection;
