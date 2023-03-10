import axios from "axios";
import {
  ADMIN_DELETE_PRODUCT,
  ADMIN_PRODUCT_LODING,
  ADMIN_SHOW_PRODUCT,
  ADMIN_UPDATE_PRODUCT,
} from "./AdminShowProduct.type";

const mainUrl = "https://nilkanth-infosys.onrender.com";
const token = localStorage.getItem("AdminToken");
const config = {
  headers: {
    admintoken: token,
  },
};
// get product
export const adminShowProducts = (page) => async (dispatch) => {
  dispatch({type:ADMIN_PRODUCT_LODING})
  try {
    let res = await axios.get(`${mainUrl}/product?page=${page}`);
    dispatch({ type: ADMIN_SHOW_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error.massage);
  }
};
// delete Product
export const adminDeleteProduct = (id, page) => async (dispatch) => {
  try {
    let res = await axios.delete(`${mainUrl}/product/delete/${id}`, config);
    dispatch({ type: ADMIN_DELETE_PRODUCT, payload: res.data });
    dispatch(adminShowProducts(page));
  } catch (error) {
    console.log(error);
  }
};
// update Product
export const adminUpdateData = (id, data) => async (dispatch) => {
  try {
    let res = await axios.patch(
      `${mainUrl}/product/update/${id}`,
      data,
      config
    );
    dispatch({ type: ADMIN_UPDATE_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
