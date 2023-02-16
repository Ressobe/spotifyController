import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [auth, setAuth] = useState(false);

  const checkAuth = () => {
    window.localStorage.getItem("clientId") ? setAuth(true) : setAuth(false);
  };

  const removeUser = () => {
    window.localStorage.removeItem("clientId");
    window.localStorage.removeItem("clientSecret");
    setAuth(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>

      <Link to={auth ? "/create" : "/authorize"}>
        <button>Create Room</button>
      </Link>

      <Link to="/join">
        <button>Join Room</button>
      </Link>
      {auth ? <button onClick={removeUser}>Log out</button> : null}
    </div>
  );
}

export default HomePage;
