import Pokedex from "./components/Pokedex/Pokedex";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  // Return the component to be rendered
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </div>
  );
}

export default App;
