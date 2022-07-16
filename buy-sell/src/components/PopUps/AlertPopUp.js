import React from "react";
import "./AlertPopUp.css";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function AlertPopUp(props) {
  return props.trigger ? (
    <div className="alertPopUp">
        <div className="alertPopUp-inner">
      <IconButton className="close-btn" aria-label="close" onClick={() => props.setTrigger(false)}>
      <CloseIcon />
    </IconButton>
      <strong>{props.title}</strong>
    </div>
    </div>
  ) : (
    ""
  );
}

export default AlertPopUp;
