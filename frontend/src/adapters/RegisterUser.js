import { REGISTER_URL } from "./ServerInfo";

const registerUser = async (username, email, password) => {
  let data = await fetch(REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return data;
};

export default registerUser;
