import { UserTypeTypes } from "../../routes";

export interface LoginPropsTypes {
  setUserType: (e: UserTypeTypes) => void;
  setIsAuth: (e: boolean) => void;
  setLoading: (e: boolean) => void;
}

export interface LoginFormSubmitTypes {
  username: string;
  password: string;
}
