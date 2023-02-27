import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { fetchToken, fetchTokenRefresh } from "../adapters/FetchTokens";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const checkAuthTokens = () => {
    let token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const checkUser = () => {
    let token = localStorage.getItem("authTokens");
    return token ? jwt_decode(token) : null;
  };

  let [authTokens, setAuthTokens] = useState(() => checkAuthTokens());
  let [user, setUser] = useState(() => checkUser());
  let [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (event) => {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
    let data = await fetchToken(username, password).then((data) => {
      return data;
    });

    if (data.detail) {
      console.log(data.detail);
      return;
    }

    setAuthTokens(data);
    setUser(jwt_decode(data.access));
    localStorage.setItem("authTokens", JSON.stringify(data));

    navigate("/profile");
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  const updateToken = async () => {
    let data = await fetchTokenRefresh(authTokens).then((data) => {
      return data;
    });
    if (!data) return;

    if (data.detail) {
      console.log(data.detail);
      logoutUser();
      return;
    }

    setAuthTokens(data);
    setUser(jwt_decode(data.access));
    localStorage.setItem("authTokens", JSON.stringify(data));

    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let fourteenMinutes = 1000 * 60 * 14;

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourteenMinutes);

    return () => clearInterval(interval);
  }, [authTokens, loading]);

  let contextData = {
    profile: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
