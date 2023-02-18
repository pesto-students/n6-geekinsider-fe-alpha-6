import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { MdLocationOn, MdAccountCircle, MdHome } from "react-icons/md";
import { iconStyles } from "../../../utils";

import { RecruitereSubmitTypes } from "../../Onboarding/types";
import { fetchJobDetail, fetchPostedJobs, StateTypes } from "../../../redux";
import "./RecruiterDetails.scss";

interface RecruiterProfilePropTypes extends RecruitereSubmitTypes {
  recentJobs: any;
  fetchPostedJobs: () => void;
  fetchJobDetail?: (e: string) => void;
}

const RecruiterDetails: React.FC<RecruiterProfilePropTypes> = (props) => {
  const [mappableSkills, setMappableSkills] = useState<string[]>([]);
  const {
    about,
    empSize,
    skills,
    location,
    name,
    site,
    preferredIndustry,
    recentJobs,
    fetchPostedJobs,
  } = props;
  const history = useHistory();

  useEffect(() => {
    if (recentJobs.length === 0) fetchPostedJobs();
  }, []);

  useEffect(() => {
    if (skills)
      setMappableSkills(
        typeof skills === "string" ? skills.split(",") : skills
      );
  }, [skills]);

  const handleJobPost = () => {
    history.push("/recruiter/postjob");
  };

  return (
    <div className="recruiter__profile__right">
      <Card>
        <section className="each-widget">
          <div className="right-section">
            <h2>{name}</h2>
            <span>{preferredIndustry}</span>
          </div>
          <div className="action-buttons">
            {/* <Button type="primary">Update</Button> */}
            <Button type="primary" onClick={handleJobPost}>
              Post a job
            </Button>
          </div>
        </section>
        <section className="tags-section">
          {mappableSkills.map((itm: string) => (
            <span className="tags" key={itm}>
              {itm}
            </span>
          ))}
        </section>
        <section className="footer-section">
          <div>
            <MdLocationOn style={iconStyles} />
            {location}
          </div>
          <div>
            <MdAccountCircle style={iconStyles} />
            {empSize}
          </div>
          <div>
            <MdHome style={iconStyles} />
            <a href={site} target="_blank" rel="noreferrer">
              Website
            </a>
          </div>
        </section>
        <Card>{about}</Card>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  recentJobs: state.recentJobs,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchPostedJobs,
      fetchJobDetail,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterDetails);
