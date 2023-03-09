import { useRef } from "react";

function JoinRoomForm() {
  const roomCode = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(roomCode.current.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="room-code">
          Room code
        </label>
        <input
          className="appearance-none shadow border w-full py-1 px-1 rounded"
          type="text"
          ref={roomCode}
          name="room-code"
          placeholder="Code"
        />
      </div>

      <div className="flex justify-center w-full">
        <button
          className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white 
        font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline mb-2"
          type="button"
          onClick=""
        >
          Join
        </button>
      </div>
    </form>
  );
}

export default JoinRoomForm;
