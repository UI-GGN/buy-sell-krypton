import React from "react";
import "./AlertPopUp.css";

function AlertPopUp(props) {
  return props.trigger ? (
    <div className="alertPopUp">
        <div className="alertPopUp-inner">
      <button className="close-btn" onClick={() => props.setTrigger(false)}>
        {" "}
        Close
      </button>
      {props.title}
    </div>
    </div>
  ) : (
    ""
  );
}

export default AlertPopUp;
