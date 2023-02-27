import { UPDATE_CLIENT_ID_SECRET } from "./ServerInfo";
import jwt_decode from "jwt-decode";

const getProfile = () => {
  const tokens = JSON.parse(localStorage.getItem("authTokens"));
  return jwt_decode(tokens["access"]);
};

const getClientId = () => {
  const profile = getProfile();
  return profile["client_id"];
};

const getClientSecret = () => {
  const profile = getProfile();
  return profile["client_secret"];
};

const getProfileId = () => {
  const profile = getProfile();
  return profile["profile_id"];
};

const updateClient = async (profileId, clientId, clientSecret) => {
  console.log(profileId, clientId, clientSecret);
  //   let data = await fetch(UPDATE_CLIENT_ID_SECRET, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       profile_id: profileId,
  //       client_id: clientId,
  //       client_secret: clientSecret,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .catch((err) => console.log(err));
};

export { getProfile, getProfileId, getClientId, getClientSecret, updateClient };
