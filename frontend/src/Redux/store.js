import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { userLoginReducer } from "./userLogin/userLogin.reducer";
import thunk from "redux-thunk";
import { laptopReducer } from "./Laptop/laptop.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { userSignupReducer } from "./userSignup/userSignup.reducer";
import { adminReducer } from "./AdminLogin/adminLogin.reducer";
import { adminShowProductReducer } from "./AdminShowProduct/AdminShowProduct.reducer";
import { adminAddProductReducer } from "./AdminAddProduct/AdminAddProduct.reducer";
import { reviewReducer } from "./ProductReview/ProductReview.reducer";
import { desktopReducer } from "./Desktopaccessories/Desktopaccessories.reducer";
import { orderReducer } from "./Order/Order.reducer";
import { AdminOrderReducer } from "./AdminOrder/AdminOrder.reducer";
import { AdminShowUserReducer } from "./AdminShowUser/AdminShowUser.reducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userSingup: userSignupReducer,
  laptopAndAllinOne: laptopReducer,
  cart: cartReducer,
  adminAuth: adminReducer,
  adminShowProduct: adminShowProductReducer,
  adminAddProduct: adminAddProductReducer,
  review: reviewReducer,
  desktop: desktopReducer,
  order: orderReducer,
  adminOrder: AdminOrderReducer,
  adminUser: AdminShowUserReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
