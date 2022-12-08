import React, { useState, useEffect } from "react";
import Pokecard from "./components/Pokecard/Pokecard";
import axios from "axios";
function App() {
  // Set pokemon and Loading states
  const [pokemon, setPokemon] = useState([]);
  const [Loading, setLoading] = useState(true);

  // Set useEffect with axios to get API data
  useEffect(() => {
    setLoading(true); // Set initial loading state
    axios.get("https://pokeapi.co/api/v2/pokemon/1").then((res) => {
      setLoading(false); // Set loading state to false after promise is fulfilled
      const pokeData = res.data;
      setPokemon(pokeData); // Set pokemon state to contain response data
    });
  }, []);

  // Set condition for loading state
  if (Loading) {
    return "Loading...";
  }

  // Return the component to be rendered
  return (
    <div>
      <Pokecard pokemon={pokemon} />
      {/*🟡Next Step: Continue with app structure from React course 🟡*/}
    </div>
  );
}

export default App;
