import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ProfileIcon() {
  return (
    <Link to="/profile">
      <button className="w-max h-max mx-4">
        <FontAwesomeIcon
          icon={faCircleUser}
          size="xl"
          className="hover:opacity-80"
        />
      </button>
    </Link>
  );
}

export default ProfileIcon;
