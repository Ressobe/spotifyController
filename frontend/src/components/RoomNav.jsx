import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function RoomNav() {
  return (
    <>
      <nav>
        <Link to="/rooms/create">
          <button>Create Room</button>
        </Link>

        <br />

        <Link to="/rooms/join">
          <button>Join Room</button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default RoomNav;
