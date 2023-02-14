import axios from "axios";
import { ADD_CART_DATA } from "./cart.type";

const mainUrl = "http://localhost:8080/cart";
export const addToCartData = (item) => async (dispatch) => {
  try {
    let res = await axios.post(`${mainUrl}/add`, item);
    dispatch({ type: ADD_CART_DATA, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
