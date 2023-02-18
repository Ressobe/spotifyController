import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/authContext";
import AuthenticateUser from "./AuthenticateUser";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";
import HomePage from "./HomePage";
import LoginUser from "./LoginUser";
import RegisterUser from "./RegisterUser";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authorize" element={<AuthenticateUser />} />
          <Route path="/create" element={<CreateRoom />} />
          <Route path="/join" element={<JoinRoom />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
