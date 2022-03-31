import React, { useState } from "react";

export default function Challenge2() {
  const [myInput, setMyInput] = useState("");
  const handleInputOnChange = (event) => {
    return setMyInput(event.target.value);
  };
  return (
    <div>
      <h2>Build a controlled input</h2>
      <section>
        What is a controlled component?
        <p>
          A controlled component is a component that renders form elements and
          controls them by keeping the form data in the component's state. In a
          controlled component, the form element's data is handled by the React
          component (not DOM) and kept in the component's state.
        </p>
        Check{" "}
        <a
          href="A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state. In a controlled component, the form element's data is handled by the React component (not DOM) and kept in the component's state."
          target="_blank"
          rel="norel"
        >
          here for more info
        </a>
      </section>
      My input: {myInput}
      <br />
      <input
        value={myInput}
        placeholder="please type it in"
        onChange={handleInputOnChange}
      />
    </div>
  );
}
