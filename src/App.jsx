import React, { useReducer, useMemo, useEffect } from "react";
import "./App.css";
import { initialState, reducer } from "./ReducerFunc";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });
  const setStep = (step) => dispatch({ type: "setStep", step });
  const toggleBackground = () => dispatch({ type: "toggleBackground" });
  const setDisplayMessage = (displayMessage) =>
    dispatch({ type: "setDisplayMessage", displayMessage });

  useEffect(() => {
    if (state.count % 2 === 0) {
      setDisplayMessage(true);
    } else {
      setDisplayMessage(false);
    }
  }, [state.count]);

  const memoizedValue = useMemo(
    () => ({ state, increment, decrement, setStep, toggleBackground }),
    [state, increment, decrement, setStep, toggleBackground]
  );

  return (
    <div className="app" style={{ backgroundColor: state.backgroundColor }}>
      <h1>Counter</h1>
      <div className="counter">
        <h2>Count: {state.count}</h2>
        <div className="buttons">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
      <div className="step">
        <label htmlFor="step">Step:</label>
        <input
          type="number"
          id="step"
          value={state.step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
      <div className="toggle-background">
        <button onClick={toggleBackground}>BG color</button>
      </div>
      {state.displayMessage && (
        <div className="even-message">Count is even!</div>
      )}
      {!state.displayMessage && (
        <div className="odd-message">Count is odd!</div>
      )}
    </div>
  );
}

export default App;
