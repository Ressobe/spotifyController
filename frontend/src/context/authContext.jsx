import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const SERVER = "http://127.0.0.1:8000";

const AuthContext = createContext();

export default AuthContext;

const fetchToken = async (username, password) => {
  let data = await fetch(`${SERVER}/api/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return data;
};

const fetchTokenRefresh = async (authTokens) => {
  let data = fetch(`${SERVER}/api/token/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: authTokens?.refresh }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return data;
};

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
