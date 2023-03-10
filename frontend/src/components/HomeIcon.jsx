import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HomeIcon() {
  return (
    <div className="inline-block py-2">
      <Link to="/">
        <button className="w-max h-max mx-4">
          <FontAwesomeIcon
            icon={faHouse}
            size="xl"
            className="hover:opacity-80"
          />
        </button>
      </Link>
    </div>
  );
}

export default HomeIcon;
