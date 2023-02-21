import { useEffect } from "react";
import { Link } from "react-router-dom";

function CreateRoom() {
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
