import { ADD_CART_DATA } from "./cart.type";

const initialValue = {
  totalQuantity: 0,
  message: "",
};

export const cartReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_CART_DATA: {
      return {
        ...state,
        totalQuantity: payload.totalQuantity,
        message: payload.message,
      };
    }
    default:
      return state;
  }
};
