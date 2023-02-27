import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function RegisterIcon() {
  return (
    <div className="inline-block py-2">
      <Link to="/register">
        <button className="w-max h-max mx-4">
          <FontAwesomeIcon
            icon={faUserPlus}
            size="xl"
            className="hover:opacity-80"
          />
        </button>
      </Link>
    </div>
  );
}

export default RegisterIcon;
