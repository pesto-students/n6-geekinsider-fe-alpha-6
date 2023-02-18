import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import QuickProfileWidget from "../../../components/QuickProfileWidget/QuickProfileWidget";
import RecommenededCandidatesWidget from "./components/RecommenededCandidatesWidget";
import JobsPosted from "./components/JobsPosted";
import { fetchRecProfile } from "../../../redux";
import { StateTypes } from "../../../redux";
import { RecruiterLandingPropTypes } from "./types";
import "./RecruiterLanding.scss";

const RecruiterLanding: React.FC<RecruiterLandingPropTypes> = (props) => {
  const { fetchRecProfile, handleProfileClick, profileDetails } = props;

  useEffect(() => {
    if (Object.keys(profileDetails).length === 0) fetchRecProfile();
  }, []);

  return (
    <div className="recruiter-landing">
      <div className="recruiter-landing__left">
        <QuickProfileWidget
          onClick={handleProfileClick}
          title={profileDetails.name}
          subtitle={profileDetails.location}
        />
        <RecommenededCandidatesWidget />
      </div>
      <div className="recruiter-landing__right">
        <JobsPosted />
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
      fetchRecProfile,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterLanding);
