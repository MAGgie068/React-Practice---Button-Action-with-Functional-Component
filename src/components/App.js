import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [hide, setHide] = useState(true);
  return (
    <div id="main">
      <button id="click" onClick={() => {
        setHide(!hide);
      }}
      >Show Me</button>
      {hide ? null : 
      (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      )}
    </div>
  );
}


export default App;
