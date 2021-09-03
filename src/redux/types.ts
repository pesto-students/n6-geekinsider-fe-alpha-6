import { UserTypeTypes } from "../routes/types";

export interface StateTypes {
    userType: UserTypeTypes | '',
    isAuth: boolean,
    profileDetails: object,
    messages: object,
    landingData: object,
    searchData: [],
    loading: boolean
}

export interface actionTypes {
    type: string,
    payload: any
}

export type DispatchType = (e: actionTypes) => void;