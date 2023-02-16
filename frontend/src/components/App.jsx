import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticateUser from "./AuthenticateUser";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authorize" element={<AuthenticateUser />} />
        <Route path="/create" element={<CreateRoom />} />
        <Route path="/join" element={<JoinRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
