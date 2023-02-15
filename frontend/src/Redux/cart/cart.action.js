import axios from "axios";
import { ADD_CART_DATA, GET_CART_DATA, IS_ERROR } from "./cart.type";

const token = localStorage.getItem("userToken");
const user = JSON.parse(localStorage.getItem("userData"));
// console.log(userToken);
const config = {
  headers: {
    usertoken: token,
  },
};
const mainUrl = "https://nilkanth-infosys.onrender.com";
// add to cart
export const addToCartData = (newcart) => async (dispatch) => {
  try {
    let res = await axios.post(`${mainUrl}/cart/add`, newcart, config);
    dispatch({ type: ADD_CART_DATA, payload: res.data });
  } catch (error) {
    dispatch({ type: IS_ERROR });
    console.log(error);
  }
};
// get to cart
export const getCartProduct = (userid) => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/cart/get/${userid}`);
    dispatch({ type: GET_CART_DATA, payload: res.data });
  } catch (error) {
    dispatch({ type: IS_ERROR });
    console.log(error);
  }
};

// update Quntity
export const updateQuntity = (id, Quantity, product) => async (dispatch) => {
  try {
    await axios.patch(
      `${mainUrl}/cart/update/${id}`,
      {
        Quantity,
        product,
      },
      config
    );
    dispatch(getCartProduct(user[0]._id));
  } catch (error) {
    console.log(error);
  }
};

// delete Cart Product
export const deleteCart = (id) => async (dispatch) => {
  try {
    await axios.delete(`${mainUrl}/cart/delete/${id}`, config);
    dispatch(getCartProduct(user[0]._id));
  } catch (error) {
    console.log(error);
  }
};
