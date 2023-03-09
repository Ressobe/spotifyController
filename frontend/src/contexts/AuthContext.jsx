import { createContext, useState, useEffect, useCallback } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { fetchToken, fetchTokenRefresh } from "../adapters/FetchTokens";
import { TOKEN_EXPIRE_TIME } from "../adapters/ServerInfo";

const AuthContext = createContext();

export default AuthContext;

const checkAuthTokens = () => {
  let token = localStorage.getItem("authTokens");
  return token ? JSON.parse(token) : null;
};

const checkUser = () => {
  let token = localStorage.getItem("authTokens");
  return token ? jwt_decode(token) : null;
};

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() => checkAuthTokens());
  let [user, setUser] = useState(() => checkUser());

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

    navigate("/");
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
    if (data.detail) {
      console.log(data.detail);
      logoutUser();
      return;
    }

    setAuthTokens(data);
    setUser(jwt_decode(data.access));
    localStorage.setItem("authTokens", JSON.stringify(data));
  };

  const initUpdateToken = useCallback(() => {
    updateToken();
  });

  useEffect(() => {
    let interval = setInterval(() => {
      if (authTokens) {
        initUpdateToken();
      }
    }, TOKEN_EXPIRE_TIME);

    return () => clearInterval(interval);
  }, [authTokens, initUpdateToken]);

  let contextData = {
    profile: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};
