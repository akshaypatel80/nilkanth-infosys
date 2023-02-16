import axios from "axios";
import {
  USER_SIGNUP,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_LODING,
} from "./userSingup.type";
const mainUrl = "https://nilkanth-infosys.onrender.com";
export const signupUser = (cred) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_LODING });
  try {
    let res = await axios.post(`${mainUrl}/user/user-singnup`, cred);
    dispatch({ type: USER_SIGNUP, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_ERROR });
  }
};
