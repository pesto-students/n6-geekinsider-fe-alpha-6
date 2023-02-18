import React, { useEffect } from "react";
import { Button, Empty } from "antd";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import JobWidget from "../../../../components/JobWidget";
import {
  fetchRecommendedJobs,
  StateTypes,
} from "../../../../redux";
import "../CandidateLandingPage.scss";

interface RecommCandidateWidgetPropTypes {
  recommendedJobs: any;
  fetchRecommendedJobs: () => void;
}

const RecommCandidateWidget: React.FC<RecommCandidateWidgetPropTypes> = (
  props
) => {
  const { recommendedJobs, fetchRecommendedJobs } = props;
  const history = useHistory();

  useEffect(() => {
    if (recommendedJobs.length === 0) fetchRecommendedJobs();
  }, []);

  const handleCardClick = (jobslug: string) => {
    history.push(`/job-detail/${jobslug}`);
  };

  return (
    <div className="recommended-job-widget">
      <h2>Recommended jobs for you</h2>
      <div className="recommended-job-widget-container">
        {recommendedJobs.length > 0 ? (
          recommendedJobs
            .slice(0, 4)
            .map((itm: any) => (
              <JobWidget
                key={itm.jobslug}
                {...{ ...itm, onClick: handleCardClick }}
              />
            ))
        ) : (
          <div className="recommended-job-widget__empty">
            <Empty />
          </div>
        )}
      </div>
      {recommendedJobs.length > 4 ? (
        <div className="see-more-container">
          <Button onClick={() => history.push("/search?q=recommended")}>
            See more...
          </Button>
        </div>
      ) : (
        <br />
      )}
    </div>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  recommendedJobs: state.recommendedJobs,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchRecommendedJobs,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommCandidateWidget);
