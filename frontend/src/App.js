import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Logout" element={<Logout/>}/>
          <Route path="/Update" element={<Update/>}/>
          <Route path="/Delete" element={<Delete/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;
