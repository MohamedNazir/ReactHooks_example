import React, { useState } from "react";
import "./style.css";

export default function UseState_withObject() {
  let obj = { firstName: "", lastName: "" };
  const [currentState, setName] = useState(obj);

  let obj1 = { firstName: "", lastName: "" };
  const [currentState1, setName1] = useState(obj1);
  return (
    <div class="row">
      <div class="column">
        <h2>Not Working</h2>
        <input
          type="text"
          value={currentState.firstName}
          onChange={(e) => setName({ firstName: e.target.value })}
        />
        <input
          type="text"
          value={currentState.lastName}
          onChange={(e) => setName({ lastName: e.target.value })}
        />
        <br />
        <h4>
          Welcome {currentState1.firstName} {currentState1.lastName},
        </h4>
        {/* <h4>{JSON.stringify(currentState)}</h4> */}
      </div>
      <div class="column">
        <h2>Working</h2>
        <input
          type="text"
          value={currentState1.firstName}
          onChange={(e) =>
            setName1({ ...currentState1, firstName: e.target.value })
          }
        />
        <input
          type="text"
          value={currentState1.lastName}
          onChange={(e) =>
            setName1({ ...currentState1, lastName: e.target.value })
          }
        />
        <br />
        <h4>
          Welcome {currentState1.firstName} {currentState1.lastName},
        </h4>
        {/* <h4>{JSON.stringify(currentState1)}</h4> */}
      </div>
    </div>
  );
}
