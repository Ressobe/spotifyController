import RegisterForm from "../components/RegisterForm";
import registerUser from "../adapters/RegisterUser";

function RegisterUser() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <RegisterForm register={registerUser} />
      </div>
    </div>
  );
}

export default RegisterUser;
