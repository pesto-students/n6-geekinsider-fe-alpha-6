import React, { useEffect } from "react";
import { Button, Empty, Tooltip } from "antd";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FaPlus } from "react-icons/fa";

import JobWidget from "../../../../components/JobWidget";
import { RecommCandidateWidgetPropTypes } from "..";
import { fetchPostedJobs, fetchJobDetail, StateTypes } from "../../../../redux";
import "../RecruiterLanding.scss";

const RecommCandidateWidget: React.FC<RecommCandidateWidgetPropTypes> = (
  props
) => {
  const { recentJobs, fetchPostedJobs } = props;
  const history = useHistory();

  useEffect(() => {
    if (recentJobs.length === 0) fetchPostedJobs();
  }, []);

  const handleJobCardClick = (jobSlug: string) => {
    history.push(`/recruiter/post/${jobSlug}`);
  };

  return (
    <>
      <div className="posted-jobs">
        <h2>Jobs posted by you</h2>
        {recentJobs.length > 0 ? (
          <div className="posted-jobs__container">
            {recentJobs.map((itm: any) => (
              <JobWidget
                key={JSON.stringify(itm)}
                {...{ ...itm, onClick: handleJobCardClick }}
              />
            ))}
          </div>
        ) : (
          <div className="post-jobs__empty-section__button">
            <Empty description="No Data, Please post a job and manage here!" />
            <Button
              onClick={() => history.push("/recruiter/postjob")}
              type="primary"
            >
              <FaPlus className="icon" />
              &nbsp;Post a Job
            </Button>
          </div>
        )}
      </div>
      <div className="posted-jobs__footer">
        <Tooltip title="Post a job">
          <Button
            shape="circle"
            onClick={() => history.push("/recruiter/postjob")}
            type="primary"
          >
            <FaPlus className="icon" />
          </Button>
        </Tooltip>
      </div>
    </>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommCandidateWidget);
