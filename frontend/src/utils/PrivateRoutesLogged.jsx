import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function PrivateRoutesLogged() {
  const { profile } = useContext(AuthContext);
  if (profile) {
    return <Navigate to="/profile" />;
  }
  return <Outlet />;
}

export default PrivateRoutesLogged;
