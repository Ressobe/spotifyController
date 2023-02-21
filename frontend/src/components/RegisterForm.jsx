function RegisterForm({ register }) {
  return (
    <>
      <form
        className="bg-white shadow-md rounded px-10 py-10 mb-4"
        onSubmit={register}
      >
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="appearance-none shadow border w-full py-1 px-1 rounded"
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none shadow border w-full py-1 px-1 rounded"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none shadow border w-full py-1 px-1 rounded"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password2"
          >
            Confirm password
          </label>
          <input
            className="appearance-none shadow border w-full py-1 px-1 rounded"
            type="password"
            name="password2"
            placeholder="Confirm password"
          />
        </div>

        <div className="flex justify-center w-full">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white 
        font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline mb-2"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="text-center">
          <a
            class="font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/login"
          >
            Already have an account?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2023 Bartosz Sobina. All rights reserved.
      </p>
    </>
  );
}

export default RegisterForm;
