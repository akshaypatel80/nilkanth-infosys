import React from "react";
import { Route, Routes } from "react-router-dom";
import Navitem from "../Components/UserNavbar/Navitem";
import HomePage from "./UserPage/HomePage";
import LoginPage from "./UserPage/LoginPage";

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
    </Routes>
  );
};

export default AllRouter;
