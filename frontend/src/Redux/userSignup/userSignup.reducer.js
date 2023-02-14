import {
  USER_SIGNUP,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_LODING,
} from "./userSingup.type";

const initialValue = {
  isAuth: false,
  isError: false,
  isLoading: false,
  isMsg: "",
};

export const userSignupReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP: {
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isMsg: payload.msg,
      };
    }

    case USER_SIGNUP_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isMsg: payload.msg,
        isAuth: false,
      };
    }
    case USER_SIGNUP_LODING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default: {
      return state;
    }
  }
};
