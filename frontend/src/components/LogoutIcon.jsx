import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function LogoutIcon() {
  const { logoutUser } = useContext(AuthContext);

  return (
    <>
      <button className="w-max h-max mx-4" onClick={logoutUser}>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          size="xl"
          className="hover:opacity-80"
        />
      </button>
    </>
  );
}

export default LogoutIcon;
