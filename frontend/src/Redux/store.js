import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { userLoginReducer } from "./userLogin/userLogin.reducer";
import thunk from "redux-thunk";
import { laptopReducer } from "./Laptop/laptop.reducer";
const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  laptopAndAllinOne: laptopReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
