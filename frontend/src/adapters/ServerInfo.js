const SERVER = "http://127.0.0.1:8000/api/";

const FETCH_TOKEN_URL = `${SERVER}token/`;
const FETCH_TOKEN_REFRESH_URL = `${SERVER}token/refresh/`;
const REGISTER_URL = `${SERVER}register/`;
const UPDATE_CLIENT_ID_SECRET = `${SERVER}client_id_secret/`;

export default SERVER;
export {
  FETCH_TOKEN_URL,
  FETCH_TOKEN_REFRESH_URL,
  REGISTER_URL,
  UPDATE_CLIENT_ID_SECRET,
};
