import {
  COUNT_ORDER,
  DELETE_ORDER,
  GET_ALL_ORDER,
  LODING_ORDER,
  UPDATE_ORDER,
} from "./AdminOrder.type";

const initialValue = {
  order: [],
  msg: "",
  orderCount: 0,
  isLoding: false,
};

export const AdminOrderReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_ALL_ORDER: {
      return {
        ...state,
        order: payload.orders,
        orderCount: payload.count,
        isLoding: false,
      };
    }
    case UPDATE_ORDER: {
      return {
        ...state,
        msg: payload.msg,
        isLoding: false,
      };
    }
    case DELETE_ORDER: {
      return {
        ...state,
        deletemsg: payload.msg,
      };
    }
    case LODING_ORDER: {
      return {
        ...state,
        isLoding: true,
      };
    }
    default:
      return state;
  }
};
