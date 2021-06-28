import React, { useReducer } from "react";
import * as type from "./actionType.js";
import RootReducer from "./RootReducer.js";

const initialState = {
  firstCounter: 0,
};

function Counter() {
  const [state, dispatch] = useReducer(RootReducer, initialState);
  return (
    <div>
      <h2> Complex Use Reduce Hook example</h2>
      {state.firstCounter}
      <button type="button" onClick={() => dispatch({ type: type.INCREMENT })}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch({ type: type.DECREMENT })}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch({ type: type.RESET })}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
