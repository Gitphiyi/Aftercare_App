import Profile from "./Components/Profile";
import Login from "./Components/Login";
// import Navbar from "./Components/Navbar";

import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
