import { useEffect } from 'react';
import { Pagination, Radio } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchResults from './SearchResults';
import { StateTypes, setSearchType, SearchType, fetchRecommendedJobs, fetchTrendingJobs } from '../../redux';
import './SearchResult.scss';
import { SearchPropTypes } from '.';

const Search: React.FC<SearchPropTypes> = (props) => {
    const { skillSearch, searchType, trendingJobs, recommendedJobs, companySearch, setSearchType, fetchRecommendedJobs, fetchTrendingJobs } = props;

    const handleRadioChange = (e: any) => {
        const value = e.target.value;
        setSearchType(value);
    }

    const returnData = (type: SearchType) => {
        switch (type) {
            case 'companySearch':
                return companySearch;
            case 'skillSearch':
                return skillSearch;
            case 'recommended':
                return recommendedJobs;
            case 'trending':
                return trendingJobs;
            default:
                return recommendedJobs;
        }
    }

    useEffect(() => {
        if (searchType === 'recommended') {
            if (recommendedJobs.length === 0) fetchRecommendedJobs();
        }
        else if (searchType === 'trending') {
            if (trendingJobs.length === 0) fetchTrendingJobs();
        }
    }, [searchType])
    
    return (
        <div className="search-and-filter-container">
            {(searchType === 'recommended' || searchType === 'trending') && <Radio.Group defaultValue={searchType} buttonStyle="solid" style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }} onChange={handleRadioChange}>
                <Radio.Button value="recommended">Recommended jobs</Radio.Button>
                <Radio.Button value="trending">Top trending jobs</Radio.Button>
            </Radio.Group>}
            <SearchResults data={returnData(searchType)} />
            <br/>
            <div className="search-footer">
                <Pagination defaultCurrent={1} total={10} />
            </div>
        </div>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    skillSearch: state.skillSearch,
    trendingJobs: state.trendingJobs,
    recommendedJobs: state.recommendedJobs,
    companySearch: state.companySearch,
    searchType: state.searchType
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    setSearchType,
    fetchRecommendedJobs,
    fetchTrendingJobs
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);