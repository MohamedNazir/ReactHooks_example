import React, { useState } from "react";
import "./style.css";

export default function UseStateHookPreviousState() {
  const initialState = 0;
  const [currentCount, setCount] = useState(initialState);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(currentCount + 1);
    }
  };

  const incrementFiveworking = () => {
    for (let i = 0; i < 5; i++) {
      setCount((previousCount) => previousCount + 1);
    }
  };

  return (
    <div class="row">
      <div class="column">
        <h2>Not Working</h2>
        <label> Count : {currentCount}</label>
        <br></br>
        <button onClick={() => setCount(currentCount + 1)}>Increment</button>
        <button onClick={() => setCount(currentCount - 1)}>Decrement</button>
        <button onClick={() => setCount(initialState)}>Reset</button>

        <button onClick={incrementFive}>Increment Five</button>
      </div>
      <div class="column">
        <h2>Working</h2>
        <label> Count : {currentCount}</label>
        <br></br>
        <button onClick={() => setCount(currentCount + 1)}>Increment</button>
        <button onClick={() => setCount(currentCount - 1)}>Decrement</button>
        <button onClick={() => setCount(initialState)}>Reset</button>

        <button onClick={incrementFiveworking}>Increment Five</button>
      </div>
    </div>
  );
}
