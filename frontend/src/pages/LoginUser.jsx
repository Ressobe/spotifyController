import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";

function LoginUser() {
  let { loginUser } = useContext(AuthContext);
  return (
    <div className="bg-stone-100 flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <LoginForm login={loginUser} />
      </div>
    </div>
  );
}

export default LoginUser;
