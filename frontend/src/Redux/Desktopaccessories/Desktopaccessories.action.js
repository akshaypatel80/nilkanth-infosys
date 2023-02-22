import axios from "axios";
import {
  GET_DESKTOP_ERROR,
  GET_DESKTOP_REQUEST,
  GET_DESKTOP_SUCCESS,
} from "./Desktopaccessories.type";

const mainUrl = "https://nilkanth-infosys.onrender.com";
export const getDesktop = (params) => async (dispatch) => {
  dispatch({ type: GET_DESKTOP_REQUEST });
  console.log(params);
  try {
    let res = await axios.get(
      `${mainUrl}/product?Category=DesktopAccessories`,
      params
    );
    dispatch({ type: GET_DESKTOP_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: GET_DESKTOP_ERROR });
  }
};
