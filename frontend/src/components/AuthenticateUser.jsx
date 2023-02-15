import { useState } from "react";

const AUTHORIZE_URL = "https://accounts.spotify.com/authorize";
const REDIRECT_URL = "http://127.0.0.1:5173/";

function AuthenticateUser() {
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("clientId", clientId);
    localStorage.setItem("clientSecret", clientSecret);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="client-id">
        Client id:
        <input
          type="text"
          name="client-id"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
        />
      </label>

      <br />
      <br />

      <label htmlFor="client-secret">
        Client secret:
        <input
          type="text"
          name="client-secret"
          value={clientSecret}
          onChange={(e) => setClientSecret(e.target.value)}
        />
      </label>
      <button type="submit">Request Authorization</button>
    </form>
  );
}

export default AuthenticateUser;
