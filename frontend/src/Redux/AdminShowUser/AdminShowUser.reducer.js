import { DELETE_USER, GET_ALL_USER, LODING_USER } from "./AdminShowUser.type";

const initialValue = {
  allUser: [],
  msg: "",
  isLoding: false,
  userCount: 0,
};

export const AdminShowUserReducer = (
  state = initialValue,
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_USER: {
      return {
        ...state,
        allUser: payload.user,
        userCount: payload.count,
        isLoding: false,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        deletemsg: payload.msg,
        isLoding: false,
      };
    }
    case LODING_USER: {
      return {
        ...state,
        isLoding: true,
      };
    }
    default:
      return state;
  }
};
