import Cookies from "js-cookie";
import React from "react";
import {  Navigate,  } from "react-router";
const ProtectedRoute = ({children}) => {
  const Token = Cookies.get("userToken")
  if (!Token) {
    return <Navigate to='/' />
  }
  return children
};
export default ProtectedRoute;