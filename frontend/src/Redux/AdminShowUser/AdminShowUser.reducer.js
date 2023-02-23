import { DELETE_USER, GET_ALL_USER } from "./AdminShowUser.type";

const initialValue = {
    allUser: [],
    msg: "",
    userCount: 0,
};
  
export const AdminShowUserReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
      case GET_ALL_USER: {
        return {
          ...state,
          allUser: payload.user,
          orderCount: payload.count,
        };
      }
      case DELETE_USER: {
          return {
            ...state,
            deletemsg: payload.msg,
          };
        }
      default:
        return state;
    }
  };