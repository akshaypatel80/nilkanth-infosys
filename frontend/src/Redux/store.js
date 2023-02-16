import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { userLoginReducer } from "./userLogin/userLogin.reducer";
import thunk from "redux-thunk";
import { laptopReducer } from "./Laptop/laptop.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { userSignupReducer } from "./userSignup/userSignup.reducer";
import { adminReducer } from "./AdminLogin/adminLogin.reducer";
import { adminShowProductReducer } from "./AdminShowProduct/AdminShowProduct.reducer";
const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userSingup: userSignupReducer,
  laptopAndAllinOne: laptopReducer,
  cart: cartReducer,
  adminAuth: adminReducer,
  adminShowProduct: adminShowProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
