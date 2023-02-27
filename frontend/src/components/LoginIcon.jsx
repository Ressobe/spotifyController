import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LoginIcon() {
  return (
    <div className="inline-block py-2">
      <Link to="/login">
        <button className="w-max h-max mx-4">
          <FontAwesomeIcon
            icon={faArrowRight}
            size="xl"
            className="hover:opacity-80"
          />
        </button>
      </Link>
    </div>
  );
}

export default LoginIcon;
