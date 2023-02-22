import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import CreateRoom from "../pages/CreateRoom";
import JoinRoom from "../pages/JoinRoom";
import HomePage from "../pages/Home";
import LoginUser from "../pages/LoginUser";
import RegisterUser from "../pages/RegisterUser";
import NotFound from "../pages/NotFound";
import RoomNav from "./RoomNav";
import Room from "../pages/Room";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/room" element={<RoomNav />}>
          <Route path="create" element={<CreateRoom />} />
          <Route path="join" element={<JoinRoom />} />
          <Route path=":id" element={<Room />} />
        </Route>

        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
