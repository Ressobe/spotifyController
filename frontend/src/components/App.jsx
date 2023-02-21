import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import CreateRoom from "../pages/CreateRoomPage";
import JoinRoom from "../pages/JoinRoomPage";
import HomePage from "../pages/HomePage";
import LoginUser from "../pages/LoginUser";
import RegisterUser from "../pages/RegisterUser";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
