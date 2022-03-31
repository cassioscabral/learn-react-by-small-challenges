import React, { useState } from "react";
import "./styles.css";
import Challenge1 from "./challenge1/Challenge1";
import Challenge2 from "./challenge2/Challenge2";

export default function App() {
  const [challengeSelected, setChallengeSelected] = useState(0);

  const handleChallengeOnChange = (event) => {
    setChallengeSelected(parseInt(event.target.value, 10));
  };

  return (
    <div className="App">
      <h1>Hi there, lets learn React</h1>

      <p>
        Please go through the challenges in order and skip if you know already
      </p>

      <label>
        Select your Challenge:
        <select value={challengeSelected} onChange={handleChallengeOnChange}>
          <option value={0}>Please select</option>
          <option value={1}>Ch1. Build a select</option>
          <option value={2}>Ch2 Build a controlled input</option>
        </select>
      </label>

      {challengeSelected === 1 && <Challenge1 />}
      {challengeSelected === 2 && <Challenge2 />}
    </div>
  );
  /* TODO List or Roadmap =)
    - respond to media dark/light 
    - hide answer toggle
  */
}
