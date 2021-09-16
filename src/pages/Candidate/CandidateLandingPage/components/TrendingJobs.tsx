import React, { useEffect } from "react";
import { Button, Empty } from "antd";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import JobWidget from "../../../../components/JobWidget";
import {
  fetchTrendingJobs,
  fetchJobDetail,
  StateTypes,
  setSearchType,
} from "../../../../redux";
import { TrendingJobsPropTypes } from "..";
import "../CandidateLandingPage.scss";

const TrendingJobs: React.FC<TrendingJobsPropTypes> = (props) => {
  const { trendingJobs, fetchTrendingJobs } = props;
  const history = useHistory();

  useEffect(() => {
    if (trendingJobs.length === 0) fetchTrendingJobs();
  }, []);

  const handleCardClick = (jobslug: string) => {
    history.push(`/job-detail/${jobslug}`);
  };

  return (
    <div className="recommended-job-widget">
      <h2>Top trending jobs</h2>
      <div className="recommended-job-widget-container">
        {trendingJobs.length > 0 ? (
          trendingJobs
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
      {trendingJobs.length > 4 ? (
        <div className="see-more-container">
          <Button
            onClick={() => {
              history.push("/search?q=trending");
              setSearchType("trending");
            }}
          >
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
  trendingJobs: state.trendingJobs,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchTrendingJobs,
      fetchJobDetail,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TrendingJobs);
