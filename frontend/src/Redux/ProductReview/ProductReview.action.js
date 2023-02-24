import axios from "axios";
import {
  ADD_REVIEW,
  GET_ALL_REVIEW,
  SAVE_ERROR_MSG,
} from "./ProductReview.type";
const mainUrl = "https://nilkanth-infosys.onrender.com";
export const getReview = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/review/${id}`);
    dispatch({ type: GET_ALL_REVIEW, payload: res.data });
    // console.log(res.data.reviewData);
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
