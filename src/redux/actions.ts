import { notification } from "antd";
import {
  CandidateSubmitTypes,
  RecruitereSubmitTypes,
} from "../pages/Onboarding/types";
import { UserTypeTypes } from "../routes";
import makeRequest from "../utils/makeRequest";
import { unionArray } from "../utils";
import { DispatchType } from "./types";
import { SearchType, StateTypes, store } from ".";

export const setIsAuth = (data: boolean) => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: "SET_AUTH",
      payload: data,
    });
  };
};

export const setLoading = (value: boolean) => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: "SET_LOADING",
      payload: value,
    });
  };
};

export const setUserType = (userType: UserTypeTypes) => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: "SET_USER_TYPE",
      payload: userType,
    });
  };
};

export const setActiveJobModalVisible = (data: boolean) => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: "SET_ACTIVE_JOB_MODAL_VISIBLE",
      payload: data,
    });
  };
};

// fetch candidate profile details
export const fetchCanProfile = () => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get("/api/user-can/user")
      .then((data) => {
        dispatch({
          type: "SET_PROFILE_DETAIL",
          payload: data.user,
        });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

// fetch recriter profile details
export const fetchRecProfile = () => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get("/api/user-rec/user")
      .then((data) => {
        dispatch({
          type: "SET_PROFILE_DETAIL",
          payload: data.user,
        });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const saveCandidateData = (
  values: CandidateSubmitTypes,
  callback: any
) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .post("/api/user-can/user", values)
      .then(() => {
        dispatch({ type: "SET_PROFILE_DETAIL", payload: values });
        callback();
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const saveRecruiterData = (
  values: RecruitereSubmitTypes,
  callback: any
) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .post("/api/user-rec/user", values)
      .then(() => {
        dispatch({ type: "SET_PROFILE_DETAIL", payload: values });
        callback();
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const createJobPost = (values: RecruitereSubmitTypes, callback: any) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .post("/api/jobs/job", values)
      .then((data) => {
        dispatch({
          type: "ADD_JOB_POST",
          payload: data?.jobDetail?.jobUploaded,
        });
        notification.success({
          message: "Job posted successfully",
          description:
            "Please visit the recent jobs posted section to get updates!",
        });
        callback();
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const fetchPostedJobs = () => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get("/api/jobs/job")
      .then((data) => {
        dispatch({ type: "SET_POSTED_JOBS", payload: data.jobRecord });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const fetchSkillSearch = (skills: string[]) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/jobs/job?skills=${skills.join(",")}`)
      .then((data) => {
        dispatch({
          type: "SET_SKILL_SEARCH_RESULT",
          payload: unionArray(
            store.getState().skillSearch,
            data.jobRecord,
            "jobslug"
          ),
        });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const applyForJob = (id: string, callback?: () => void) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .post(`/api/user-can/apply`, { jobid: id })
      .then((data) => {
        if (data?.success) {
          dispatch({ type: "SET_LOADING", payload: false });
          callback && callback();
          notification.success({
            message: "Hurray!, applied successfully",
          });
        } else if (data?.message) {
          notification.error({
            message: "Already applied!",
          });
          dispatch({ type: "SET_LOADING", payload: false });
        }
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const getJobDetails = (cname: string) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/jobs/job?cname=${cname}`)
      .then((data) => {
        dispatch({ type: "SET_SKILL_SEARCH_RESULT", payload: data.jobRecord });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const fetchTrendingJobs = () => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/jobs/trend`)
      .then((data) => {
        if (data?.jobRecord) {
          dispatch({ type: "SET_TRENDING_JOBS", payload: data.jobRecord });
        } else {
          dispatch({ type: "SET_TRENDING_JOBS", payload: [] });
        }
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_TRENDING_JOBS", payload: [] });
      });
  };
};

export const fetchRecommendedJobs = () => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/jobs/reco`)
      .then((data) => {
        if (data?.jobRecord) {
          dispatch({ type: "SET_RECOMMENDED_JOBS", payload: data.jobRecord });
        } else {
          dispatch({ type: "SET_RECOMMENDED_JOBS", payload: [] });
        }
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_RECOMMENDED_JOBS", payload: [] });
      });
  };
};

export const fetchJobDetail = (id: string) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/jobs/jobdetail?jobid=${id}`)
      .then((data) => {
        dispatch({ type: "SET_ACTIVE_JOB", payload: data.jobRecord });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const fetchRecommendedCandidates = () => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/user-rec/getcans`)
      .then((data) => {
        dispatch({ type: "SET_RECOMMENDED_CANDIDATES", payload: data.user });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const setRecruiterCandidateDetails = (values: any) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_RECRUITER_CANDIDATE_DETAILS", payload: values });
  };
};

export const setSearchType = (searchType: SearchType) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_SEARCH_TYPE", payload: searchType });
  };
};

export const fetchCompanySearchData = (cname: string) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/jobs/job?cname=${cname}`)
      .then((data) => {
        dispatch({ type: "SET_COMPANY_SEARCH", payload: data.jobRecord });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const fetchAppliedCandidates = (jobslug: string) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/user-rec/applied?jobid=${jobslug}`)
      .then((data) => {
        if (data?.enrolledCandidate) {
          dispatch({
            type: "SET_APPLIED_CANDIDATES",
            payload: unionArray(
              store.getState().appliedCandidates,
              data.enrolledCandidate,
              "userId"
            ),
          });
        } else {
          dispatch({ type: "SET_APPLIED_CANDIDATES", payload: [] });
        }
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_APPLIED_CANDIDATES", payload: [] });
      });
  };
};

export const fetchCandidateDetails = (aboutId: string) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/user-rec/getcan?canid=${aboutId}`)
      .then((data) => {
        if (data?.user?.about) {
          const tempStore: StateTypes = store.getState();
          const type = tempStore.searchType;
          let tempObect = [];
          switch (type) {
            case "recommended":
              tempObect = tempStore.recommendedCandidates.map((itm: any) => {
                if (itm?.aboutid === aboutId) {
                  itm = { ...itm, ...data.user };
                  dispatch({
                    type: "SET_RECRUITER_CANDIDATE_DETAILS",
                    payload: itm,
                  });
                }
                return itm;
              });
              dispatch({
                type: "SET_RECOMMENDED_CANDIDATES",
                payload: tempObect,
              });
              break;
            case "skillSearch":
              tempObect = tempStore.skillSearch.map((itm: any) => {
                if (itm?.aboutid === aboutId) {
                  itm = { ...itm, ...data.user };
                }
                return itm;
              });
              dispatch({ type: "SET_SKILL_SEARCH_RESULT", payload: tempObect });
              break;
            default:
              tempObect = tempStore.recommendedCandidates.map((itm: any) => {
                if (itm?.aboutid === aboutId) {
                  itm = { ...itm, ...data.user };
                }
                return itm;
              });
              dispatch({
                type: "SET_RECOMMENDED_CANDIDATES",
                payload: tempObect,
              });
              break;
          }
        }
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_APPLIED_CANDIDATES", payload: [] });
      });
  };
};

export const fetchRecruiterSkillSearch = (skills: string[]) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/user-rec/search-can?skills=${skills.join(",")}`)
      .then((data) => {
        dispatch({
          type: "SET_SKILL_SEARCH_RESULT",
          payload: unionArray(
            store.getState().skillSearch,
            data?.user,
            "aboutid"
          ),
        });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const fetchCities = () => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get("/api/utils/cities")
      .then((data) => {
        dispatch({ type: "SET_CITIES", payload: data?.cities });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const fetchSkills = () => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get("/api/utils/skills")
      .then((data) => {
        dispatch({ type: "SET_SKILLS", payload: data?.skills });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const clearStates = () => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "CLEAR_STATE", payload: {} });
  };
};

export const fetchAppliedCandidateDetail = (userId: string) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/user-rec/getcan?canid=${userId}`)
      .then((data) => {
        const tempAppliedCandidates = store
          .getState()
          .appliedCandidates.map((itm: any) => {
            if (itm?.userId === userId) {
              itm = { ...itm, ...data.user };
            }
            return itm;
          });
        dispatch({
          type: "SET_APPLIED_CANDIDATES",
          payload: tempAppliedCandidates,
        });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};

export const fetchSearchJobDetail = (jobSlug: string) => {
  return (dispatch: DispatchType) => {
    dispatch({ type: "SET_LOADING", payload: true });
    makeRequest
      .get(`/api/jobs/jobdetail?jobid=${jobSlug}`)
      .then((data: any) => {
        const tempStore: StateTypes = store.getState();
        const type = tempStore.searchType;
        let tempObect = [];
        switch (type) {
          case "companySearch":
            tempObect = tempStore.companySearch.map((itm: any) => {
              if (itm?.jobslug === jobSlug) {
                itm = { ...itm, ...data.jobRecord };
              }
              return itm;
            });
            dispatch({ type: "SET_COMPANY_SEARCH", payload: tempObect });
            break;
          case "skillSearch":
            tempObect = tempStore.skillSearch.map((itm: any) => {
              if (itm?.jobslug === jobSlug) {
                itm = { ...itm, ...data.jobRecord };
              }
              return itm;
            });
            dispatch({ type: "SET_SKILL_SEARCH_RESULT", payload: tempObect });
            break;
          case "recommended":
            tempObect = tempStore.recommendedJobs.map((itm: any) => {
              if (itm?.jobslug === jobSlug) {
                itm = { ...itm, ...data.jobRecord };
              }
              return itm;
            });
            dispatch({ type: "SET_RECOMMENDED_JOBS", payload: tempObect });
            break;
          case "trending":
            tempObect = tempStore.trendingJobs.map((itm: any) => {
              if (itm?.jobslug === jobSlug) {
                itm = { ...itm, ...data.jobRecord };
              }
              return itm;
            });
            dispatch({ type: "SET_TRENDING_JOBS", payload: tempObect });
            break;
          default:
            tempObect = tempStore.recommendedJobs.map((itm: any) => {
              if (itm?.jobslug === jobSlug) {
                itm = { ...itm, ...data.jobRecord };
              }
              return itm;
            });
            dispatch({ type: "SET_RECOMMENDED_JOBS", payload: tempObect });
            break;
        }
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };
};
