import React from "react";
// import "/Users/janani/Downloads/buy-sell-krypton/src/components/Modal/PopUp.css";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useNavigate } from "react-router-dom";


function LoginPopup(props){
  let navigate = useNavigate();
  return (props.trigger) ? (
    <div className="popUp">
      <div className="popUp-inner">
        <IconButton className="close-btn" aria-label="close" onClick={() => props.setTrigger(false)}>
        <CloseIcon />
        </IconButton>
        <h1>Login</h1>
        <div className="popUp-buttons">
        <button onClick={() => navigate("/login")}>
            Login as Buyer
          </button>
          <button> Login as Seller </button>

        </div>
      </div>
    </div>
  ) : "";
}

export default LoginPopup;
