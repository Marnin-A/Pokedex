import Pokedex from "./components/Pokedex/Pokedex";
import "./App.css";

function App() {
  // Return the component to be rendered
  return (
    <div className="App">
      <Pokedex />
      {/*🟡Next features: 1. Add pokemon loading screen
                          2. Remove Console Logs at the end of project🟡
       */}
    </div>
  );
}

export default App;
