import axios from "axios";
import { DELETE_ORDER, GET_ALL_ORDER, UPDATE_ORDER } from "./AdminOrder.type";

const mainUrl = "http://localhost:8080";
const token = localStorage.getItem("AdminToken");

const config = {
  headers: {
    admintoken: token,
  },
};

export const getAllOrder = (page) => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/order?page=${page}`, config);
    dispatch({ type: GET_ALL_ORDER, payload: res.data });
  } catch (error) {
    console.log(error.msg);
  }
};

export const updateSatate = (id, status) => async (dispatch) => {
  try {
    let res = await axios.patch(
      `${mainUrl}/order/status/${id}`,
      { status: status },
      config
    );
    dispatch({ type: UPDATE_ORDER, payload: res.data });
    dispatch(getAllOrder());
  } catch (error) {
    console.log(error.msg);
  }
};

export const deleteOreder = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`${mainUrl}/order/delete/${id}`, config);
    dispatch({ type: DELETE_ORDER, payload: res.data });
    dispatch(getAllOrder());
  } catch (error) {
    console.log(error.msg);
  }
};
