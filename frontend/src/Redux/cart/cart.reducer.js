import { ADD_CART_DATA, GET_CART_DATA, IS_ERROR } from "./cart.type";

const initialValue = {
  message: "",
  cartData: [],
  iseError: false,
};

export const cartReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_CART_DATA: {
      return {
        ...state,
        message: payload.msg,
        isError: false,
      };
    }
    case GET_CART_DATA: {
      return {
        ...state,
        cartData: payload.cartData,
        isError: false,
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    default:
      return state;
  }
};
