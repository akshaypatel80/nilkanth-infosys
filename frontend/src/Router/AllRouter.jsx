import React from "react";
import { Route, Routes } from "react-router-dom";
import DellLaptop from "../Components/LaptopAndAllinOne/DellLaptop";
import HPLaptop from "../Components/LaptopAndAllinOne/HPLaptop";
import Navitem from "../Components/UserNavbar/Navitem";
import AdminRequireAuth from "../hoc/AdminRequireAuth";
import UserRequireAuth from "../hoc/UserRequireAuth";
import AdminAddProductPage from "./AdminPage/AdminAddProductPage";
import AdminDshboardPage from "./AdminPage/AdminDshboardPage";
import AdminLoginPage from "./AdminPage/AdminLoginPage";
import AdminShowOrderPage from "./AdminPage/AdminShowOrderPage";
import AdminShowProduct from "./AdminPage/AdminShowProduct";
import AdminUpdateProduct from "./AdminPage/AdminUpdateProduct";
import AdminUserPage from "./AdminPage/AdminUserPage";
import CartPage from "./UserPage/CartPage";
import DesktopPage from "./UserPage/DesktopPage";
import HomePage from "./UserPage/HomePage";
import LaptopPage from "./UserPage/LaptopPage";
import LoginPage from "./UserPage/LoginPage";
import OrderListPage from "./UserPage/OrderListPage";
import SignupPage from "./UserPage/SignupPage";
import SinglProductPage from "./UserPage/SinglProductPage";

const AllRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navitem />
            <HomePage />
          </>
        }
      ></Route>
      <Route
        path="/user/login"
        element={
          <>
            <Navitem />
            <LoginPage />
          </>
        }
      ></Route>
      <Route
        path="/user/signup"
        element={
          <>
            <Navitem />
            <SignupPage />
          </>
        }
      ></Route>
      <Route
        path="/LaptopAllinOne"
        element={
          <>
            <Navitem />
            <LaptopPage />
          </>
        }
      ></Route>
      <Route
        path="/desktopAccessries"
        element={
          <>
            <Navitem />
            <DesktopPage />
          </>
        }
      ></Route>
      <Route
        path="/hp"
        element={
          <>
            <Navitem />
            <HPLaptop />
          </>
        }
      ></Route>
      <Route
        path="/Dell"
        element={
          <>
            <Navitem />
            <DellLaptop />
          </>
        }
      ></Route>
      <Route
        path="/user/order"
        element={
          <>
            <Navitem />
            <OrderListPage />
          </>
        }
      ></Route>
      <Route
        path="/singlProduct/:id"
        element={
          <UserRequireAuth>
            <>
              <Navitem />
              <SinglProductPage />
            </>
          </UserRequireAuth>
        }
      ></Route>
      <Route
        path="/user/cart"
        element={
          <UserRequireAuth>
            <>
              <Navitem />
              <CartPage />
            </>
          </UserRequireAuth>
        }
      ></Route>
      <Route
        path="/admin-login"
        element={
          <>
            <Navitem />
            <AdminLoginPage />
          </>
        }
      ></Route>
      <Route
        path="/admin"
        element={
          <AdminRequireAuth>
            <AdminDshboardPage />
          </AdminRequireAuth>
        }
      ></Route>
      <Route
        path="/admin/product"
        element={
          <AdminRequireAuth>
            <AdminShowProduct />
          </AdminRequireAuth>
        }
      ></Route>
      <Route
        path="/admin/addProduct"
        element={
          <AdminRequireAuth>
            <AdminAddProductPage />
          </AdminRequireAuth>
        }
      ></Route>
      <Route
        path="/admin/update/:id"
        element={
          <AdminRequireAuth>
            <AdminUpdateProduct />
          </AdminRequireAuth>
        }
      ></Route>
      <Route
        path="/admin/order"
        element={
          <AdminRequireAuth>
            <AdminShowOrderPage />
          </AdminRequireAuth>
        }
      ></Route>
      <Route
        path="/admin/user"
        element={
          <AdminRequireAuth>
            <AdminUserPage />
          </AdminRequireAuth>
        }
      ></Route>
    </Routes>
  );
};

export default AllRouter;
