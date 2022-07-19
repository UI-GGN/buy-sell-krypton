import React, { useState } from "react";
import NavBar from "../NavBar";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const errorMessage = "Please enter valid credentials";
  let navigate = useNavigate();

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = document.forms[0];
    console.log(password.value)
    var userData = localStorage.getItem(username.value);
    if (userData) {
      userData = JSON.parse(userData);
      if (userData.password !== password.value) {
        setErrorMessages({ name: "password", message: errorMessage });
      }
      if (userData.role !== "buyer")
        setErrorMessages({ name: "username", message: errorMessage });
      if (userData.password === password.value && userData.role === "buyer") setisLoggedIn(true);
    } else {
      setErrorMessages({ name: "username", message: errorMessage });
      console.log("in this");
    }
  }

  const renderForm = (
    <div className="login-form">
      <h1> Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" required />
          {renderErrorMessage("username")} 
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <input className= "submit-button" type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <NavBar />
      <div className="login">
          {isLoggedIn ? navigate("/") : renderForm} 
      </div>
    </div>
  );
}

export default Login;
