import axios from "axios";
import {
  ADD_REVIEW,
  GET_ALL_REVIEW,
  SAVE_ERROR_MSG,
} from "./ProductReview.type";
const mainUrl = "http://localhost:8080";
export const getReview = (productId) => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/review/${productId}`);
    dispatch({ type: GET_ALL_REVIEW, payload: res.data });
  } catch (error) {
    console.log(error.msg);
  }
};
export const addReview = (sendData) => async (dispatch) => {
  try {
    let res = await axios.post(`${mainUrl}/review`, sendData);
    dispatch({ type: ADD_REVIEW, payload: res.data.msg });
  } catch (error) {
    dispatch({ type: SAVE_ERROR_MSG, payload: error.msg });
  }
};
