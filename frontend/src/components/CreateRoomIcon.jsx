import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CreateRoomIcon() {
  return (
    <div className="inline-block py-2">
      <Link to="/room/create">
        <button className="w-max h-max mx-4">
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="xl"
            className="hover:opacity-80"
          />
        </button>
      </Link>
    </div>
  );
}

export default CreateRoomIcon;
