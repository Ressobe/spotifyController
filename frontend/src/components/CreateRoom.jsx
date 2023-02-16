import { useEffect } from "react";
import { Link } from "react-router-dom";

function CreateRoom() {
  useEffect(() => {
    let code = "";
    const queryString = window.location.search;
    if (queryString.length > 0) {
      const urlParams = new URLSearchParams(queryString);
      code = urlParams.get("code");
    }
    console.log(code);
  }, []);

  return (
    <div>
      <h1>Create Room Page</h1>

      <Link to="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
}

export default CreateRoom;
