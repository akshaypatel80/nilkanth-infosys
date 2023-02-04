import axios from "axios";
import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGOUT } from "./userLogin.type";
// const mainUrl = process.env.REACT_APP_MAIN_URL;
const mainUrl = "http://localhost:8080";

export const userLogin = (cred) => async (dispatch) => {
  console.log(cred);
  try {
    let res = await axios.post(`${mainUrl}/user/login`, cred);
    dispatch({ type: USER_LOGIN, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_ERROR });
  }
};

export const userLogout = () => ({ type: USER_LOGOUT });
