import React from "react";
import { useFormik } from "formik";
import "./Register.css";

const validateData = (data) => {
  const errors = {};

  if (!data.username) {
    errors.username = "Please enter Username";
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

  const formik = useFormik({
    initialValues: {
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validate: validateData,
    onSubmit: () => {
      alert("User Successfully Registered!!!");
    },
  });

  return (
    <div className="Registration">
      <h1> Welcome to Registration Page </h1>
      <form onSubmit={formik.handleSubmit}>
        <p>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <br />
            <div className="errors">
            {formik.touched.username && formik.errors.username ? (
              <span style={{ color: "red" }}>{formik.errors.username}</span>
            ) : null} </div>
          </label>{" "}
        </p>
        <p>
          <label htmlFor="phoneNumber">
            Phone number:
            <input
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />{" "}
            <br />
            <div className="errors">
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <span style={{ color: "red" }}>{formik.errors.phoneNumber}</span>
            ) : null} </div>
          </label>
        </p>
        <p>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <br />
            <div className="errors">
            {formik.touched.password && formik.errors.password ? (
              <span style={{ color: "red" }}>{formik.errors.password}</span>
            ) : null} </div>
          </label>
        </p>
        <p>
          <label htmlFor="confirmPassword">
            Confirm password:
            <input
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            <br />
            <div className="errors">
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <span style={{ color: "red" }}>
                {formik.errors.confirmPassword}
              </span>
            ) : null} </div>
          </label>
        </p>
        <button type="submit" >
        {/* disabled={!formik.errors.length}> */}
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}
 
export default Register;
 
