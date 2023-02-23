import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function RegisterIcon() {
  return (
    <>
      <Link to="/register">
        <button className="w-max h-max mx-4">
          <FontAwesomeIcon
            icon={faUserPlus}
            size="xl"
            className="hover:opacity-80"
          />
        </button>
      </Link>
    </>
  );
}

export default RegisterIcon;
