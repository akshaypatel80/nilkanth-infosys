import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const UserRequireAuth = () => {
  const isAuth = useSelector((store) => store.userLogin.isAuth);
  const { pathname } = useLocation();
  if (isAuth) {
    return children;
  } else {
    return (
      // Redirecting to Login page
      <Navigate
        to="/user/login"
        state={{ from: pathname }}
        replace
        // spacer
      />
    );
  }

  return <div></div>;
};

export default UserRequireAuth;
