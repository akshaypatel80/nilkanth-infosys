import { ADD_ORDER, ERROR_ORDER, GET_ORDER, LODING_ORDER } from "./Order.type";

let initialState = {
  orderData: [],
  msg: "",
  isError: false,
  isLoding: false,
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ORDER: {
      return {
        ...state,
        msg: payload.msg,
        isLoding: false,
        isError: false,
      };
    }
    case GET_ORDER: {
      return {
        ...state,
        orderData: payload,
        isError: false,
        isLoding: false,
      };
    }
    case LODING_ORDER: {
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    }
    case ERROR_ORDER: {
      return {
        ...state,
        isLoding: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
