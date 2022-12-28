import React from "react";
import { Navigate,Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../components/hooks/auth";

const RequireAdminAuth = ({ children }) => {
  const auth = useAuth();
//   const location = useLocation();
  const isAdmin = (auth.userRole == 1 );

  if(!isAdmin){
    return isAdmin ? <Outlet/>: <Navigate to="/"/>
}

  return children;
};

export default RequireAdminAuth;
