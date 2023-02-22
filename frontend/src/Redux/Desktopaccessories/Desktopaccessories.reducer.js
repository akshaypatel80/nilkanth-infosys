import {
  GET_DESKTOP_ERROR,
  GET_DESKTOP_REQUEST,
  GET_DESKTOP_SUCCESS,
} from "./Desktopaccessories.type";

const initialValue = {
  desktop: [],
  loding: false,
  error: false,
};
export const desktopReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_DESKTOP_REQUEST: {
      return {
        ...state,
        loding: true,
        error: false,
      };
    }
    case GET_DESKTOP_SUCCESS: {
      return {
        ...state,
        desktop: payload.products,
        loding: false,
        error: false,
      };
    }
    case GET_DESKTOP_ERROR: {
      return {
        ...state,
        loding: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
