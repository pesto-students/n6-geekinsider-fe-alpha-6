import React, { useEffect } from "react";
import { Card, Button } from "antd";
import { MdLocationOn, MdMonetizationOn, MdHistory } from "react-icons/md";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import About from "../About";
import { iconStyles } from "../../utils";
import { StateTypes, fetchSearchJobDetail, applyForJob } from "../../redux";
import { JobPostDetailWidgetPropTypes } from "./types";
import "./JobPostDetailWidget.scss";

const JobPostDetailWidget: React.FC<any> = (props) => {
  const {
    jobTitle,
    skills,
    jobLocation,
    ctc,
    exp,
    searchType,
    jobDescription,
    companyName,
    applyForJob,
    jobslug,
    fetchSearchJobDetail,
  } = props;
  const mappableSkills =
    typeof skills === "string" ? skills.split(",") : skills;

  const handleApply = () => {
    jobslug && applyForJob(jobslug);
  };

  useEffect(() => {
    if (!jobDescription) {
      fetchSearchJobDetail(jobslug);
    }
  }, []);

  useEffect(() => {
    if (!jobDescription) {
      fetchSearchJobDetail(jobslug);
    }
  }, [jobslug, searchType]);

  return (
    <div className="job-posting-detail-widget">
      <Card>
        <section className="each-widget">
          <div className="right-section">
            <h3>{jobTitle}</h3>
            <span>{companyName}</span>
          </div>
          <div className="action-buttons">
            <Button type="primary" onClick={handleApply}>
              Apply
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
            {jobLocation}
          </div>
          <div title={`${ctc} lacs per annum`}>
            <MdMonetizationOn style={iconStyles} />
            {ctc} LPA
          </div>
          <div>
            <MdHistory style={iconStyles} />
            {exp} year
          </div>
        </section>
        <About title="About the job">{jobDescription}</About>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  searchType: state.searchType,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      applyForJob,
      fetchSearchJobDetail,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobPostDetailWidget);
