import LoginRegisterWrapper from "../components/LoginRegisterWrapper";
import RegisterForm from "../components/RegisterForm";
import registerUser from "../adapters/RegisterUser";

function RegisterUser() {
  return (
    <LoginRegisterWrapper>
      <RegisterForm register={registerUser} />
    </LoginRegisterWrapper>
  );
}

export default RegisterUser;
