import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HomeIcon() {
  return (
    <Link to="/">
      <button className="w-max h-max mx-4">
        <FontAwesomeIcon
          icon={faHouse}
          size="xl"
          className="hover:opacity-80"
        />
      </button>
    </Link>
  );
}

export default HomeIcon;
