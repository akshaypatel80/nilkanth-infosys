import React from "react";
import { Route, Routes } from "react-router-dom";
import DellLaptop from "../Components/LaptopAndAllinOne/DellLaptop";
import HPLaptop from "../Components/LaptopAndAllinOne/HPLaptop";
import Navitem from "../Components/UserNavbar/Navitem";
import HomePage from "./UserPage/HomePage";
import LaptopPage from "./UserPage/LaptopPage";
import LoginPage from "./UserPage/LoginPage";
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
        path="/LaptopAllinOne"
        element={
          <>
            <Navitem />
            <LaptopPage />
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
        path="/singlProduct/:id"
        element={
          <>
            <Navitem />
            <SinglProductPage />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default AllRouter;
