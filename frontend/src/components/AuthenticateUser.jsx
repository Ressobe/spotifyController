import { useState } from "react";
import { Link } from "react-router-dom";

const AUTHORIZE_URL = "https://accounts.spotify.com/authorize";
const REDIRECT_URL = "http://127.0.0.1:5173/create";

function AuthenticateUser() {
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("clientId", clientId);
    localStorage.setItem("clientSecret", clientSecret);

    let url = `${AUTHORIZE_URL}?client_id=${clientId}&response_type=code`;
    url += `&redirect_uri=${encodeURI(REDIRECT_URL)}`;
    url += `&show_dialog=true&scope=${PERMISSIONS.join(" ")}`;

    window.location.href = url;
  };

  return (
    <div>
      <form>
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
        <button type="button" onClick={handleSubmit}>
          Request Authorization
        </button>
      </form>
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
}

export default AuthenticateUser;
