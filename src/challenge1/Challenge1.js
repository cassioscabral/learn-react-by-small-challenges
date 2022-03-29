export default function Challenge1() {
  return (
    <div className="Challenge1">
      <h1>Welcome to Challenge1</h1>
      <p>
        Please build a select component and display the current select value.
        For more info on the select tag:
        <br />{" "}
        <a
          href="https://www.w3schools.com/tags/tag_select.asp"
          target="_blank"
          rel="noreferrer"
        >
          Select docs at W3
        </a>
        <br />
        Or the{" "}
        <a
          href="https://reactjs.org/docs/forms.html#the-select-tag"
          target="_blank"
          rel="noreferrer"
        >
          React docs
        </a>{" "}
        on it
      </p>

      {/* Make your changes below this comment */}

      {/* Answer below */}
      <h3>Your favorite dog breed is: </h3>
      <form>
        <label>
          Select your favorite dog breed:
          <select>
            <option value="daschund">Daschund</option>
            <option value="poodle">Poodle</option>
          </select>
        </label>
      </form>
    </div>
  );
}
