import { useState } from "react";
import {
  getClientId,
  getClientSecret,
  getProfileId,
  updateClient,
} from "../adapters/UpdateClientIdSecret";

function ProfileForm() {
  const [clientId, setClientId] = useState(() => getClientId());
  const [clientSecret, setClientSecret] = useState(() => getClientSecret());
  const [profileId, _] = useState(() => getProfileId());

  return (
    <>
      <form className="bg-white shadow-md rounded px-10 py-10 mb-4">
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="clientId"
          >
            Client id
          </label>
          <input
            className="appearance-none shadow border w-full py-1 px-1 rounded"
            type="text"
            name="clientId"
            placeholder="Client id"
            value={clientId}
            onChange={() => setClientId(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="clientSecret"
          >
            Client secret
          </label>
          <input
            className="appearance-none shadow border w-full py-1 px-1 rounded"
            type="text"
            name="clientSecret"
            placeholder="Client secret"
            value={clientSecret}
            onChange={() => setClientSecret(e.target.value)}
          />
        </div>

        <div className="flex justify-center w-full">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white 
        font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline mb-2"
            type="button"
            onClick={() => updateClient(profileId, clientId, clientSecret)}
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
}

export default ProfileForm;
