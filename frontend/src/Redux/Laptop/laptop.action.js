import axios from "axios";
import {
  GET_LAPTOP_ERROR,
  GET_LAPTOP_REQUEST,
  GET_LAPTOP_SUCCESS,
} from "./laptop.type";

const mainUrl = "https://nilkanth-infosys.onrender.com";
export const getLaptop = (params) => async (dispatch) => {
  dispatch({ type: GET_LAPTOP_REQUEST });
  console.log(params);
  try {
    let res = await axios.get(
      `${mainUrl}/product?Category=LaptopandAllinOne`,
      params
    );
    dispatch({ type: GET_LAPTOP_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: GET_LAPTOP_ERROR });
  }
};
