import "./App.css";
import UseStateHookEx1 from "./components/1.UseStateHookEx1";
import UseStateHookPreviousState from "./components/2.UseStateHooksPreviousState";
import UseState_withObject from "./components/3.UseState_withObject";
import UseState_withArray from "./components/4.UseState_withArray";
import UseReduceHook_Example from "./components/5.useReduceHook_Example";
import Counter from "./components/ReduceHook_Example/counter.js";

function App() {
  return (
    <div className="App">
      <UseStateHookEx1></UseStateHookEx1>
      <hr />
      <UseStateHookPreviousState></UseStateHookPreviousState>
      <hr />
      <UseState_withObject></UseState_withObject>
      <hr />
      <UseState_withArray></UseState_withArray>
      <hr />
      <UseReduceHook_Example />
      <hr />
      <Counter></Counter>
      <hr />
    </div>
  );
}

export default App;
