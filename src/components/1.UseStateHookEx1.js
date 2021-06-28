import React, { useState } from "react";

export default function UseStateHookEx1() {
  const initialState = 0;
  const [currentCount, setCount] = useState(initialState);
  return (
    <div>
      <button onClick={() => setCount(currentCount + 1)}>Increment</button>
      <button onClick={() => setCount(currentCount - 1)}>Decrement</button>
      <button onClick={() => setCount(initialState)}>Reset</button>
      <br></br>
      <h2>
        <label> Count : {currentCount}</label>
      </h2>
    </div>
  );
}
