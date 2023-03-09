import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import LoginRegisterWrapper from "../components/LoginRegisterWrapper";

function LoginUser() {
  let { loginUser } = useContext(AuthContext);
  return (
    <LoginRegisterWrapper>
      <LoginForm login={loginUser} />
    </LoginRegisterWrapper>
  );
}

export default LoginUser;
