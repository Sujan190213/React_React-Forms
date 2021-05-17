import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  function onChangeHandler(event) {
    setName(event.target.value); // set the value of name property
  }
  function handleClick(event) {
    setHeadingText(name); // set the heading as name property
  }
  return (
    <div className="container">
      <h1>Hello, {headingText} </h1>
      <input
        onChange={onChangeHandler}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
