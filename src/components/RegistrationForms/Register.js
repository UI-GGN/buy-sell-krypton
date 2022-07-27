import React, { useState } from "react";
import { FormikProvider, useFormik } from "formik";
import "./Register.css";
import AlertPopUp from "../Modal/AlertPopUp";
import NavBar from "../../NavBar";
import { useLocation } from "react-router-dom";


function Register() {
  const location = useLocation();
  const role = location.state.role;
  const [buttonPopup, setButtonPopup] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");
  const [touchedUsername, setTouchedUsername]=useState(false);
  const [touchedPhone, setTouchedPhone]=useState(false);
  const [touchedPassword, setTouchedPassword]=useState(false);
  const [touchedConfirm, setTouchedConfirm] = useState(false);
  var regix = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
  const formik = useFormik({

    initialValues: {
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validateOnMount: false,
    onSubmit: () => {
        var userDetails = JSON.parse(localStorage.getItem(formik.values.username + role));
        if(userDetails && userDetails.role === role ){
          setButtonPopup(true);
          setSeverity("error");
          setMessage(role + " already registered!!")
        }
        else{
        localStorage.setItem(
          formik.values.username + role,
          JSON.stringify({ password: formik.values.password, role: role })
        );
  
        setButtonPopup(true);
        setSeverity("success");
        setMessage(role + " Successfully Registered!!");
        }

        formik.resetForm();
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
                onBlur={() => setTouchedUsername(true) }
              />
              {touchedUsername ? ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formik.values.username)) ? <div style={{ color: "red", fontSize:"12px" }}>
                  Please enter valid username
                </div> : <div class="line-layout" style={{fontSize: "x-small"  }}>
                {" "}
                * Username must be email Id
              </div>) : (<div class="line-layout" style={{fontSize: "x-small"  }}>
                {" "}
                * Username must be email Id
              </div>)}
            </label>{" "}

            <label htmlFor="phoneNumber">
              <strong>Phone Number:</strong>
              <input
                className="formInput"
                type="text"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={() => setTouchedPhone(true) }
              />
              {touchedPhone ? ((formik.values.phoneNumber.length !== 10 || !/[1-9][0-9]{9}/.test(formik.values.phoneNumber)) ? <div style={{ color: "red", fontSize:"12px" }}>
                  Please enter valid phone Number
                </div> : <div class="line-layout" style={{fontSize: "x-small"  }}>
                {" "}
                * Phone number must be 10 digits
              </div>) : (<div class="line-layout" style={{fontSize: "x-small"  }}>
                {" "}
                * Phone number must be 10 digits
              </div>)}
            </label>{" "}

            <label htmlFor="password">
              <strong>Password:</strong>
              <input
                id="password"
                className="formInput"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={() => setTouchedPassword(true) }
              />
              {touchedPassword ? (!regix.test(formik.values.password) ? <div style={{ color: "red", fontSize:"12px" }}>
                  Please enter valid password
                </div> : <div class="line-layout" style={{fontSize: "x-small"  }}>
                {" "}
                * Password must include atleast one symbol, small and capital letter
              </div>) : (<div class="line-layout" style={{fontSize: "x-small"  }}>
                {" "}
                * Password must include atleast one symbol, small and capital letter
              </div>)}
            </label>{" "}


            <label htmlFor="confirmPassword">
              <strong>Confirm password:</strong>
              <input
              id="confirmPassword"
                className="formInput"
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={() => setTouchedConfirm(true) }
              />
              {touchedConfirm ? (formik.values.confirmPassword !== formik.values.password ? <div style={{ color: "red", fontSize:"12px" }}>
                  Please enter same password
                </div> : null) : (null)}
            </label>{" "}

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
          severity = {severity}
          role = {role}
        ></AlertPopUp>
      </div>
    </div>
  );
}

export default Register;
