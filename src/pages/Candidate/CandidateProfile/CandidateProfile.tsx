import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import CandidateDetails from "./CandidateDetails";
import Loader from "../../../components/Loader";
import { fetchCanProfile, StateTypes } from "../../../redux";
import { ProfilePropsTypes } from "./types";
import "./CandidateProfile.scss";

const CandidateProfile: React.FC<ProfilePropsTypes> = (props) => {
  const { profileDetails, fetchCanProfile, loading } = props;

  useEffect(() => {
    if (Object.keys(profileDetails).length === 0) fetchCanProfile();
  }, []);

  return (
    <>
      {Object.keys(profileDetails).length > 0 ? (
        <div className="candidate-profile">
          <CandidateDetails {...{ ...profileDetails }} />
        </div>
      ) : (
        !loading && (
          <div className="loader--global">
            <Loader text="Loading profile..." />
          </div>
        )
      )}
    </>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  profileDetails: state.profileDetails,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      fetchCanProfile,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CandidateProfile);
