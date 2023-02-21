import RegisterForm from "../components/RegisterForm";

function RegisterUser() {
  const handleSubmit = async (username, password) => {
    let data = await fetch(`${SERVER}/api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));

    return data;
  };

  return (
    <div className="bg-stone-100 flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <RegisterForm register={handleSubmit} />
      </div>
    </div>
  );
}

export default RegisterUser;
