import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token'); // Check your auth method
  
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
  
  export default PrivateRoute;