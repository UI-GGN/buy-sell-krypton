import React from "react";
import "./PopUp.css";
import { useNavigate } from "react-router-dom";

function PopUp(props) {
  let navigate = useNavigate();
  
  return props.trigger ? (
    <div className="popUp">
      <div className="popUp-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          {" "}
          Close
        </button>
        <h1>Registration</h1>
        <div className="popUp-buttons">
          <button onClick={() => navigate("/registerBuyer")}>
            Register as Buyer
          </button>
          <button> Register as Seller </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
