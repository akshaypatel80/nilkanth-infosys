import { ADD_REVIEW, ERROR_MSG_FALSE, GET_ALL_REVIEW, MSG_FALSE, SAVE_ERROR_MSG } from "./ProductReview.type";

let initialState = {
  reviewData: [],
  addAndLoad: false,
  msg: false,
  error_msg: false,
};

export const reviewReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
      case ADD_REVIEW:
         return {
              ...state,
              addAndLoad : !state.addAndLoad,
              msg : payload
         }
         case ERROR_MSG_FALSE:
          return {
              ...state,
              error_msg : false
          }
          case MSG_FALSE :
              return {
                  ...state,
                  msg : false
              }
         case GET_ALL_REVIEW:
          return {
              ...state,
              reviewData : payload
          }
          case SAVE_ERROR_MSG:{
             return {...state,
              error_msg : payload}
          }
      default:
          return state;
    }
  }