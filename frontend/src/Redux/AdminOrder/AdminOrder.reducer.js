import { COUNT_ORDER, DELETE_ORDER, GET_ALL_ORDER, UPDATE_ORDER } from "./AdminOrder.type";

const initialValue = {
  order: [],
  msg: "",
  orderCount: 0,
};

export const AdminOrderReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_ALL_ORDER: {
      return {
        ...state,
        order: payload.orders,
        orderCount: payload.count,
      };
    }
    case UPDATE_ORDER: {
      return {
        ...state,
        msg: payload.msg,
      };
    }
    case DELETE_ORDER: {
        return {
          ...state,
          deletemsg: payload.msg,
        };
      }
    default:
      return state;
  }
};
