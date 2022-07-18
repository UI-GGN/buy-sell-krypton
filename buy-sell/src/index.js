import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/RegistrationForms/Register";
import { render } from "react-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
