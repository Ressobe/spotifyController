import { FETCH_TOKEN_URL, FETCH_TOKEN_REFRESH_URL } from "./ServerInfo";

const fetchToken = async (username, password) => {
  let data = await fetch(FETCH_TOKEN_URL, {
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
  let data = fetch(FETCH_TOKEN_REFRESH_URL, {
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

export { fetchToken, fetchTokenRefresh };
