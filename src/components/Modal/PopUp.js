import React from "react";
import "./PopUp.css";
import { useNavigate } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function PopUp(props) {
  let navigate = useNavigate();
  
  return props.trigger ? (
    <div className="popUp">
      <div className="popUp-inner">
      <IconButton className="close-btn" aria-label="close" onClick={() => props.setTrigger(false)}>
      <CloseIcon />
    </IconButton>
        <h1>Registration</h1>
        <div className="popUp-buttons">
          <button onClick={() => navigate("/registerBuyer", { state: { role: "Buyer" }})}>
            Register as Buyer
          </button>
          <button onClick={() => navigate("/registerSeller", { state: { role: "Seller" }})}> Register as Seller </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
