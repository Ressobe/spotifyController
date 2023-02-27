import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function JoinRoomIcon() {
  return (
    <div className="inline-block py-2">
      <Link to="/room/join">
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

export default JoinRoomIcon;
