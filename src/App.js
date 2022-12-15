import Pokedex from "./components/Pokedex/Pokedex";
import "./App.css";

function App() {
  // Return the component to be rendered
  return (
    <div className="App">
      <Pokedex />
      {/*🟡Next features: 1. Attach previous and next functions🟡
                          2. Add pokemon loading screen*/}
    </div>
  );
}

export default App;
