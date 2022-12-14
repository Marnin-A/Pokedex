import Pokedex from "./components/Pokedex/Pokedex";
import { useState } from "react";
import "./App.css";

function App() {
  // Page counter
  // Set page counter state
  const [counter, setCounter] = useState(1);
  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter === 1) {
      setCounter(1);
    } else {
      setCounter((counter) => counter - 1);
    }
  };
  // Return the component to be rendered
  return (
    <div className="App">
      <Pokedex />
      {/* Page counter */}
      <div className="counter">
        <div className="btn__container">
          <button className="control__btn" onClick={decrease}>
            Prev
          </button>
          <span className="counter__output">{counter}</span>
          <button className="control__btn" onClick={increase}>
            Next
          </button>
        </div>
      </div>
      {/*🟡Next Step: Center page counter, and attach previous and next functions🟡*/}
    </div>
  );
}

export default App;
