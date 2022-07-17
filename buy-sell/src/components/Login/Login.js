import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errorMessage = "Please enter valid credentials";

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  function handleSubmit(event) {
    event.preventDefault();
    var { username, password } = document.forms[0];
    var userData = localStorage.getItem(username.value);
    if (userData) {
        userData = JSON.parse(userData)
      if (userData.password !== password.value) {
          setErrorMessages({name: "password", message: errorMessage});
        console.log("in error")}

      else setIsSubmitted(true);
    } else {
      setErrorMessages({name: "username", message: errorMessage});
      console.log("in this")
    }
  }

  const renderForm = (
    <div className="form">
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
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
