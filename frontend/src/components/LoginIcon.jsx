import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LoginIcon() {
  return (
    <Link to="/login">
      <button className="w-max h-max mx-4">
        <FontAwesomeIcon
          icon={faArrowRight}
          size="xl"
          className="hover:opacity-80"
        />
      </button>
    </Link>
  );
}

export default LoginIcon;
