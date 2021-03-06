import React, { useState } from "react";
import { FormikProvider, useFormik } from "formik";
import "./Register.css";
import AlertPopUp from "../Modal/AlertPopUp";
import NavBar from "../../NavBar";
import { useLocation } from "react-router-dom";

const validateData = (data) => {
  const errors = {};

  if (!data.username) {
    errors.username = "Please enter Username";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.username)) {
    errors.username = "Please enter valid username";
  }

  if (!data.phoneNumber) {
    errors.phoneNumber = "Please enter Phone Number";
  } else if (
    data.phoneNumber.length !== 10 ||
    !/[1-9][0-9]{9}/.test(data.phoneNumber)
  ) {
    errors.phoneNumber = "Please enter valid phone number";
  }

  if (!data.password) {
    errors.password = "Please enter Password";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/i.test(
      data.password
    )
  ) {
    errors.password = "Please enter valid password";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Please enter Confirm password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Please enter valid password";
  }

  return errors;
};

function Register() {
  const location = useLocation();
  const role = location.state.role;
  const [buttonPopup, setButtonPopup] = useState(false);
  const [message, setMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validate: validateData,
    validateOnMount: true,
    onSubmit: () => {
        var userDetails = JSON.parse(localStorage.getItem(formik.values.username + role));
        if(userDetails && userDetails.role === role ){
          setButtonPopup(true);
          setMessage(role + " already registered!!")
        }
        else{
        localStorage.setItem(
          formik.values.username + role,
          JSON.stringify({ password: formik.values.password, role: role })
        );
  
        setButtonPopup(true);
        setMessage(role === "Buyer" ? "Buyer Successfully Registered!!!" : "Seller Successfully Registered!!!");
        }
    },
  });

  const toggle = () => {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    if (password.type === "password") {
      password.type = "text";
      confirmPassword.type = "text";
    } else {
      password.type = "password";
      confirmPassword.type = "password";
    }
  }

  return (
    <div>
      <NavBar />
      <div className="registration">
        <h1> Welcome to {role} Registration Page </h1>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">
              <strong>Username:</strong>
              <input
                className="formInput"
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.values.username && formik.errors.username ? (
                <div style={{ color: "red", fontSize:"12px" }}>
                  {formik.errors.username}
                </div>
              ) : (
                <div style={{fontSize: "x-small"  }}>
                  {" "}
                  * Username must be email Id
                </div>
              )}
            </label>{" "}
            <label htmlFor="phoneNumber">
              <strong>Phone number:</strong>
              <input
                className="formInput"
                type="text"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />{" "}
              {formik.values.phoneNumber && formik.errors.phoneNumber ? (
                <div style={{ color: "red", fontSize:"12px" }}>
                  {formik.errors.phoneNumber}
                </div>
              ) : (
                <div style={{fontSize: "x-small" }}>
                  {" "}
                  * Phone number must be 10 digits
                </div>
              )}
            </label>
            <label htmlFor="password">
              <strong>Password:</strong> 
              <input
                id="password"
                className="formInput"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.values.password &&
              formik.values &&
              formik.errors.password ? (
                <div style={{ color: "red", fontSize:"12px" }}>
                  {formik.errors.password}
                </div>
              ) : (
                <div style={{fontSize: "x-small" }}>
                  * Password must include atleast one symbol, small and capital letter
                  </div>
              )}
            </label>
            <label htmlFor="confirmPassword">
              <strong>Confirm password:</strong>
              <input
                id="confirmPassword"
                className="formInput"
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              {formik.values.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div style={{ color: "red", fontSize:"12px" }}>
                  {formik.errors.confirmPassword}
                </div>
              ) : (
                null
              )}
            </label>
            <div style={{fontSize: "small" }} > 
            <input type="checkbox" style={{height: "12px"}} onClick={() => toggle()} />  Show password
             </div>
            <button className="submitButton" type="submit" disabled={!(formik.isValid && formik.dirty)} style={{marginTop:"15px"}}>
              Submit{" "}
            </button>
          </form>
        </FormikProvider>
        <AlertPopUp
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          title = {message}
        ></AlertPopUp>
      </div>
    </div>
  );
}

export default Register;
