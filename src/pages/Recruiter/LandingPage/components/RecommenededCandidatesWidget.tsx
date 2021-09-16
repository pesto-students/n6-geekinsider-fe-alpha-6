import React, { useEffect } from 'react';
import { Button, Card, Avatar, Empty } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { fetchRecommendedCandidates, StateTypes, setRecruiterCandidateDetails } from '../../../../redux';
import { RecommenededCandidatesWidgetTypes, SingleWidgetTypes } from '..';
import '../RecruiterLanding.scss';

const SingleWidget: React.FC<SingleWidgetTypes> = (props) => {
    const { skills, jobTitle, name, handleClick } = props;

    return (
        <Card hoverable onClick={() => handleClick(props)} className="recommended-candidate__widget__card">
            <section className="each-widget">
                <Avatar size={55}>{name[0]}</Avatar>
                <div className="right-section">
                    <h3>{name}</h3>
                    <span>{jobTitle}</span>
                </div>
            </section>
            <div className="tag-section">
                {skills.map((itm: string) => <span className="tags" key={itm}>{itm}</span>)}
            </div>
        </Card>
    )
}

const RecommenededCandidatesWidget: React.FC<RecommenededCandidatesWidgetTypes> = (props) => {
    const { recommendedCandidates, fetchRecommendedCandidates, setRecruiterCandidateDetails } = props;
    const history = useHistory();

    useEffect(() => {
        if (recommendedCandidates.length === 0) fetchRecommendedCandidates();
    }, [])

    const handleClick = (values: SingleWidgetTypes) => {
        setRecruiterCandidateDetails(values);
        history.push(`/candidate/recommended/${values.aboutid}`);
    }

    const handleSeeMore = () => {
        history.push('/recruiter/search')
    }

    return (
        <div className="recommended-candidates-widget">
            <h2>Recommended candidates</h2>
            {recommendedCandidates.length ?
                <>
                    <div className="recommended-candidates-widget-container">
                        {recommendedCandidates.slice(0, 3).map((itm: any) => <SingleWidget key={itm} {...{...itm, handleClick}}/>)}
                    </div>
                    {recommendedCandidates.length>3 && <div className="see-more-container">
                        <Button onClick={handleSeeMore}>See more...</Button>
                    </div>}
                </>
                :
                <div><Empty /></div>
            }
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    recommendedCandidates: state.recommendedCandidates,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    fetchRecommendedCandidates,
    setRecruiterCandidateDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecommenededCandidatesWidget);