import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ProfileIcon() {
  return (
    <div className="inline-block py-2">
      <Link to="/profile">
        <button className="w-max h-max mx-4">
          <FontAwesomeIcon
            icon={faCircleUser}
            size="xl"
            className="hover:opacity-80"
          />
        </button>
      </Link>
    </div>
  );
}

export default ProfileIcon;
