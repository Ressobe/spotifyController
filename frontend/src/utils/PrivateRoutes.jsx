import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function PrivateRoutes() {
  const { profile } = useContext(AuthContext);
  if (profile) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
}

export default PrivateRoutes;
