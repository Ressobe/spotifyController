import { useContext } from "react";
import AuthContext from "../context/authContext";

function LoginUser() {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={loginUser}>
        <br />
        <input type="text" name="username" placeholder="Username" />
        <br />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <br />
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}

export default LoginUser;
