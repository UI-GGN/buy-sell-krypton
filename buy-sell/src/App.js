import './App.css';
import React, {useState} from 'react';
import RegisterPopUp from "./components/RegisterPopUp";

function App() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <h1> CBP MarketPlace</h1>
                </header>
                <button className="registartionButton" onClick={() => setButtonPopup(true)}> Register here</button>
            {/* </header> */}
            <RegisterPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
            </RegisterPopUp>
        </div>
    );
}

export default App;
