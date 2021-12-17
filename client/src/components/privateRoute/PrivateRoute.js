import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const { token } = useSelector((state) => state.user);

  return !token ? <Navigate to="/auth" /> : children;
}

export default PrivateRoute;
