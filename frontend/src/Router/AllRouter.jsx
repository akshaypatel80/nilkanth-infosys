import React from "react";
import { Route, Routes } from "react-router-dom";
import Navitem from "../Components/UserNavbar/Navitem";
import HomePage from "./UserPage/HomePage";

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
    </Routes>
  );
};

export default AllRouter;
