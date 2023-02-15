import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticateUser from "./AuthenticateUser";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
