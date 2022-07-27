import React from "react";
import "./AlertPopUp.css";
import { useNavigate } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

function AlertPopUp(props) {
  let navigate = useNavigate();
  return props.trigger ? (
    <div className="alertPopUp">
      <div className="alertPopUp-inner">
        <IconButton
          className="close-btn"
          aria-label="close"
          onClick={() => props.setTrigger(false)}
        >
          <CloseIcon />
        </IconButton>

        <div
          style={{
            fontSize: "20px",
            color:
              props.severity === "success"
                ? "rgba(84, 175, 97, 0.7)"
                : "rgba(136, 67, 67, 0.7)",
            height: "17px",
          }}
        >
          {props.severity === "success" ? (
            <CheckCircleOutlineIcon
              style={{ height: "17px", fill: "rgba(84, 175, 97, 0.7)" }}
            />
          ) : (
            <ErrorOutlineIcon
              style={{ height: "17px", fill: "rgba(136, 67, 67, 0.7)" }}
            />
          )}
          <strong>{props.title}</strong>
        </div>
        <button
          hidden={props.severity !== "success"}
          className="alertButton"
          onClick={() =>
            props.role === "Buyer" ? navigate("/login") : navigate("/")
          }
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
