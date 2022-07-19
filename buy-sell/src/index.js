import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/RegistrationForms/Register";
import { render } from "react-dom";
<<<<<<< HEAD
import Login from "./components/Login/Login";
=======
import Login from "./components/Login"
>>>>>>> main

// const root = ReactDOM.createRoot(document.getElementById("root"));
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/registerBuyer" element={<Register />} />
<<<<<<< HEAD
      <Route path="/login" element={<Login/>}/>
=======
      <Route path="/login" element={<Login />}/>
>>>>>>> main
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
