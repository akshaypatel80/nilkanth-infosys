import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { userLoginReducer } from "./userLogin/userLogin.reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
