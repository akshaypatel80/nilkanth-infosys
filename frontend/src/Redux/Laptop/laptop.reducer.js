import {
  GET_LAPTOP_ERROR,
  GET_LAPTOP_REQUEST,
  GET_LAPTOP_SUCCESS,
} from "./laptop.type";

const initialValue = {
  laptop: [],
  loding: false,
  error: false,
};

export const laptopReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_LAPTOP_REQUEST: {
      return {
        ...state,
        loding: true,
        error: false,
      };
    }
    case GET_LAPTOP_SUCCESS: {
      return {
        ...state,
        laptop: payload.products,
        loding: false,
        error: false,
      };
    }
    case GET_LAPTOP_ERROR: {
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
