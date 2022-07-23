import React from "react";
import "./AlertPopUp.css";
import { Alert } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";

function AlertPopUp(props) {
  let navigate = useNavigate();
  return props.trigger ? (
    <div className="alertPopUp">
      <div className="alertPopUp-inner">
        <Alert severity={props.severity}>
          <strong>{props.title}</strong>
        </Alert>
        <br />
        <button
          hidden={props.severity !== "success"}
          className="alertButton"
          onClick={() => props.role === "Buyer" ? navigate("/login") : navigate("/")}
        >
          {" "}
          Login
        </button>
        <button
          hidden={props.severity === "success"}
          className="alertButton"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          {" "}
          Register Again
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AlertPopUp;
