import React from "react";
import "./styles.css";
import Challenge1 from "./challenge1/Challenge1";
export default function App() {
  return (
    <div className="App">
      <h1>Hi there, lets learn React</h1>

      <hr />
      <p>Please go through the challenges in order and skip if you need</p>
      {/* TODO select a Challenge in a dropdown and display here */}
      {/* TODO respond to media dark/light */}
      <Challenge1 />
    </div>
  );
}
