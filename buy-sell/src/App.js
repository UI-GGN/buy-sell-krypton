import './App.css';
import React, {useState} from 'react';
import PopUp from "./components/PopUp";

function App() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <h1> CBP MarketPlace</h1>
                </header>
                <button className="registartionButton" onClick={() => setButtonPopup(true)}> Register here</button>
            {/* </header> */}
            <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
            </PopUp>
        </div>
    );
}

export default App;
