import React, { useState } from "react";
import "./NavBar.css";
import PopUp from "./components/Modal/PopUp";
import LoginPopup from "./components/LoginPopup";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  

  const location = useLocation();
  return (
    <header className="top-section-layout">
      <div className="top-nav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#productsList">ProductsList</a>

        <div className="search-container">
          {location.pathname !== "/login" && (
            <button className="registartionButton" onClick={() => setLoginPopup(true)}>Login </button>
          )}
          <LoginPopup trigger={loginPopup} setTrigger={setLoginPopup}></LoginPopup>
        </div>
        
        <div className="search-container">
          <button
            hidden={window.location.pathname !== "/"}
            className="registartionButton"
            onClick={() => setButtonPopup(true)}
          >
            {" "}
            Register here
          </button>
          {/* <div>
            <form>
              <img
                src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838838.png?token=exp=1657127010~hmac=eed065251fd9317fbbd01eb84e8f2383"
                alt="cart"
              ></img>
              <button type="submit">Submit</button>
              <input type="text" placeholder="Search.." name="search"></input>
            </form>
          </div> */}
          <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
