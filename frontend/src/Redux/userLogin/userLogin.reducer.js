import {
  IS_LOADING,
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
} from "./userLogin.type";

const userToken = localStorage.getItem("userToken");
const data = JSON.parse(localStorage.getItem("userData")) || {};
console.log(data);
const initialValue = {
  isAuth: !!userToken,
  token: userToken,
  data: data,
  error: false,
  isErrorMsg: null,
  isLoading: false,
};
export const userLoginReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      localStorage.setItem("userToken", payload.token);
      localStorage.setItem("userData", JSON.stringify(payload.user));
      return {
        ...state,
        isAuth: true,
        token: payload,
        data: payload,
        error: false,
        isLoading: false,
      };
    }
    case USER_LOGIN_ERROR: {
      return {
        ...state,
        isAuth: false,
        token: payload,
        isErrorMsg: payload,
        data: payload,
        error: true,
        isLoading: false,
      };
    }
    case IS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userData");
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
