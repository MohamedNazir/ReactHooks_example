import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return (state = state + 1);
    case "DECREMENT":
      return (state = state - 1);
    case "RESET":
      return (state = initialState);

    default:
      return state;
  }
};

function UseReduceHook_Example() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2> Simple Use Reduce Hook example</h2>
      {state}
      <button type="button" onClick={() => dispatch("INCREMENT")}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch("DECREMENT")}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch("RESET")}>
        Reset
      </button>
    </div>
  );
}

export default UseReduceHook_Example;
