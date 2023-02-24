import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import LoginIcon from "./LoginIcon";
import HomeIcon from "./HomeIcon";
import LogoutIcon from "./LogoutIcon";
import RegisterIcon from "./RegisterIcon";
import ProfileIcon from "./ProfileIcon";
import JoinRoomIcon from "./JoinRoomIcon";
import CreateRoomIcon from "./CreateRoomIcon";
import { Outlet } from "react-router-dom";

function Navbar() {
  const { profile } = useContext(AuthContext);

  if (profile) {
    return (
      <>
        <nav>
          <div classname="fixed flex flex-row top-0 w-full p-3">
            <div className="w-1/2 inline-block text-left px-3 "></div>
            <div className="w-1/2 inline-block text-right">
              <LogoutIcon />
              <JoinRoomIcon />
              <CreateRoomIcon />
              <ProfileIcon />
              <HomeIcon />
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  } else {
    return (
      <>
        <nav>
          <div classname="fixed flex flex-row top-0 w-full p-3">
            <div className="w-1/2 inline-block text-left px-3 "></div>
            <div className="w-1/2 inline-block text-right">
              <RegisterIcon />
              <LoginIcon />
              <HomeIcon />
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  }
}

export default Navbar;
