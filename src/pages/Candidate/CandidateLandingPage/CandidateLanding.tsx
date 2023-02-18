import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RecommCandidateWidget from "./components/RecomendedJobsWidget";
import QuickProfileWidget from "../../../components/QuickProfileWidget/QuickProfileWidget";
import TopTrending from "./components/TrendingJobs";
import { fetchCanProfile, StateTypes } from "../../../redux";
import { CandidateLandingPagePropTypes } from ".";
import "./CandidateLandingPage.scss";

const CandidateLandingPage: React.FC<CandidateLandingPagePropTypes> = (
  props
) => {
  const { handleProfileClick, fetchCanProfile, profileDetails } = props;

  useEffect(() => {
    if (Object.keys(profileDetails).length === 0) fetchCanProfile();
  }, []);

  return (
    <div className="candidate-landing">
      <div className="candidate-landing__left">
        <QuickProfileWidget
          onClick={handleProfileClick}
          title={profileDetails.name}
          subtitle={profileDetails.jobTitle}
        />
      </div>
      <div className="candidate-landing__right">
        <RecommCandidateWidget />
        <TopTrending />
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  profileDetails: state.profileDetails,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchCanProfile,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateLandingPage);
