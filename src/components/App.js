import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  return (
    <div id="main">
      <button id="click" onClick={show}>Show Me</button>
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}

function show(){
  document.getElementById('para').style.visibility = "hidden";
}


export default App;
