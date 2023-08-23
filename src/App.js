import NavBar from "./Components/Home/NavBar"
import Cart from "./Pages/Cart";
import React, { useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pdetail from "./Components/Estore/Pdetail";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
function App() {
  const [user, setUser] = useState();
  return (
    <>
      <Router>
        <NavBar user={user}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
          <Route path='/productdetail/:id' element={<Pdetail />} />
          <Route path='/profile' element={<Profile user={user} />} />
          <Route path='/login' element={<Login setUser={setUser} />} />

        </Routes>

      </Router>
    </>
  );
}
export default App;
