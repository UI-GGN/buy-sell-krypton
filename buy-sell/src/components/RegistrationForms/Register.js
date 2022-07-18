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
      localStorage.setItem(
        formik.values.username,
        JSON.stringify({ password: formik.values.password, role: role })
      );
      var retrievedObject = localStorage.getItem(formik.values.username);

      console.log("retrievedObject: ", retrievedObject);
      setButtonPopup(true);
    },
  });

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
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.values.username && formik.errors.username ? (
                <div className="error" style={{ color: "red" }}>
                  {formik.errors.username}
                </div>
              ) : (
                <div className="error" style={{fontSize: "x-small"  }}>
                  {" "}
                  * Username must be email Id
                </div>
              )}
            </label>{" "}
            <label htmlFor="phoneNumber">
              <strong>Phone number:</strong>
              <input
                type="text"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />{" "}
              {formik.values.phoneNumber && formik.errors.phoneNumber ? (
                <div className="error" style={{ color: "red" }}>
                  {formik.errors.phoneNumber}
                </div>
              ) : (
                <div className="error" style={{fontSize: "x-small" }}>
                  {" "}
                  * Phone number must be 10 digits
                </div>
              )}
            </label>
            <label htmlFor="password">
              <strong>Password:</strong>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.values.password &&
              formik.values &&
              formik.errors.password ? (
                <div className="error" style={{ color: "red" }}>
                  {formik.errors.password}
                </div>
              ) : (
                <div className="error" style={{fontSize: "x-small" }}>
                  * Password must include atleast one symbol, small and capital letter
                  </div>
              )}
            </label>
            <label htmlFor="confirmPassword">
              <strong>Confirm password:</strong>
              <input
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              {formik.values.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="error" style={{ color: "red" }}>
                  {formik.errors.confirmPassword}
                </div>
              ) : (
                null
              )}
            </label>
            <button className="submitButton" type="submit" disabled={!(formik.isValid && formik.dirty)} style={{marginTop:"15px"}}>
              Submit{" "}
            </button>
          </form>
        </FormikProvider>
        <AlertPopUp
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          title = {role === "Buyer" ? "Buyer Successfully Registered!!!" : "Seller Successfully Registered!!!"}
        ></AlertPopUp>
      </div>
    </div>
  );
}

export default Register;
