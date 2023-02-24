import axios from "axios";
import { ADD_ORDER, ERROR_ORDER, GET_ORDER, LODING_ORDER } from "./Order.type";

const mainUrl = "https://nilkanth-infosys.onrender.com";
const user = JSON.parse(localStorage.getItem("userData"));
export const addOrder = () => async (dispatch) => {
  dispatch({ type: LODING_ORDER });
  try {
    let res = await axios.post(`${mainUrl}/order/add`, { userid: user[0]._id });
    dispatch({ type: ADD_ORDER, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR_ORDER, payload: error.msg });
  }
};

export const getOrder = () => async (dispatch) => {
  dispatch({ type: LODING_ORDER });
  try {
    let res = await axios.get(`${mainUrl}/order/${user[0]._id}`);
    dispatch({ type: GET_ORDER, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR_ORDER, payload: error.msg });
  }
};
