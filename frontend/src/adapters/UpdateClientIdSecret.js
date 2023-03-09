import { UPDATE_CLIENT_ID_SECRET } from "./ServerInfo";

import jwt_decode from "jwt-decode";

const getProfile = () => {
  const tokens = JSON.parse(localStorage.getItem("authTokens"));
  return jwt_decode(tokens["access"]);
};

const getClientId = () => {
  let clientId = localStorage.getItem("client_id");

  if (clientId !== null) {
    return clientId;
  }

  const profile = getProfile();

  return profile["client_id"];
};

const getClientSecret = () => {
  let clientSecret = localStorage.getItem("client_secret");

  if (clientSecret !== null) {
    return clientSecret;
  }

  const profile = getProfile();

  return profile["client_secret"];
};

const getProfileId = () => {
  const profile = getProfile();
  return profile["profile_id"];
};

const saveClientIdToStorage = (clientId) => {
  localStorage.setItem("client_id", clientId);
};

const saveClientSecretToStorage = (clientSecret) => {
  localStorage.setItem("client_secret", clientSecret);
};

const updateClient = async (clientId, clientSecret) => {
  const profileId = getProfileId();

  let response = await fetch(`${UPDATE_CLIENT_ID_SECRET}${profileId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
    }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return response;
};

export {
  getProfile,
  getProfileId,
  getClientId,
  getClientSecret,
  saveClientIdToStorage,
  saveClientSecretToStorage,
  updateClient,
};
