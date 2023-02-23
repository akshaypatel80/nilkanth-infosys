import axios from "axios";
import { DELETE_USER, GET_ALL_USER } from "./AdminShowUser.type";

const mainUrl = "http://localhost:8080";
const token = localStorage.getItem("AdminToken");

const config = {
  headers: {
    admintoken: token,
  },
};
export const getAllUser = (page) => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/user?page=${page}`, config);
    dispatch({ type: GET_ALL_USER, payload: res.data });
  } catch (error) {
    console.log(error.msg);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`${mainUrl}/user/delete/${id}`, config);
    dispatch({ type: DELETE_USER, payload: res.data });
    dispatch(getAllUser());
  } catch (error) {
    console.log(error.msg);
  }
};
