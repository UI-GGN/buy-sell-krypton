import React from "react";
import "./RegisterPopUp.css";
import {Link} from 'react-router-dom';

function RegisterPopUp(props) {

  return props.trigger ? (
    <div className="popUp">
      <div className="popUp-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          {" "}
          Close
        </button>
        <h1>Registration</h1>
        <div className="popUp-buttons">
          <button>
          <Link to="/registerBuyer">
            Register as Buyer
            </Link>
          </button>
          <button>Register as Seller</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default RegisterPopUp;
