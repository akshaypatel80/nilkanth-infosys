import axios from "axios";
import { ADMIN_ADD_PRODUCT } from "./AdminAddProduct.type";

const mainUrl = "http://localhost:8080";
const token = localStorage.getItem("AdminToken");
console.log(token);
const config = {
  headers: {
    admintoken: token,
  },
};
export const addProduct = (product) => async (dispatch) => {
  try {
    let res = await axios.post(`${mainUrl}/product/add`, product, config);
    dispatch({ type: ADMIN_ADD_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error.msg);
  }
};
