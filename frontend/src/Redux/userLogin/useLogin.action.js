import axios from "axios";
import {
  IS_LOADING,
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
} from "./userLogin.type";
// const mainUrl = process.env.REACT_APP_MAIN_URL;
const mainUrl = "https://nilkanth-infosys.onrender.com";

export const userLogin = (cred) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  try {
    let res = await axios.post(`${mainUrl}/user/login`, cred);
    dispatch({ type: USER_LOGIN, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_ERROR });
  }
};

export const userLogout = () => ({ type: USER_LOGOUT });
