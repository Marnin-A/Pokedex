import React, { useState, useEffect } from "react";
import Pokecard from "./components/Pokecard/Pokecard";
import axios from "axios";
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [Loading, setLoading] = useState(true);
  let cancel;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1", {
        cancelToken: new axios.cancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        const pokeData = res.data;
        setPokemon(pokeData);
      });
  }, []);
  if (Loading) {
    return "Loading...";
  }
  return (
    <div>
      <Pokecard pokemon={pokemon} />
    </div>
  );
}

export default App;
