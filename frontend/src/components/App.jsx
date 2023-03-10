import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoutes";
import PrivateRoutesLogged from "../utils/PrivateRoutesLogged";
import CreateRoom from "../pages/CreateRoom";
import JoinRoom from "../pages/JoinRoom";
import HomePage from "../pages/Home";
import LoginUser from "../pages/LoginUser";
import RegisterUser from "../pages/RegisterUser";
import NotFound from "../pages/NotFound";
import Room from "../pages/Room";
import Profile from "../pages/Profile";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/room">
            <Route path="create" element={<CreateRoom />} />
            <Route path="join" element={<JoinRoom />} />
            <Route path=":id" element={<Room />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<PrivateRoutesLogged />}>
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<RegisterUser />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
