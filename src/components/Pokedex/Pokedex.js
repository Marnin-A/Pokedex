import React, { useState, useEffect } from "react";
import Pokecard from "../Pokecard/Pokecard";
import axios from "axios";
const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  // Set pokemon and Loading states
  const [Loading, setLoading] = useState(true);

  // Set useEffect with axios to get API data
  useEffect(() => {
    setLoading(true); // Set initial loading state
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      setLoading(false); // Set loading state to false after promise is fulfilled
      const pokeData = res.data.results;
      const pokeData2 = res.data;
      console.log(pokeData2);
      setPokemon(pokeData); // Set pokemon state to contain response data
      console.log(pokeData);
    });
  }, []);

  // Getting the individual pokemon data
  const getPokedata = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      setLoading(false); // Set loading state to false after promise is fulfilled
      const pokeData = res.data.results;

      setPokemon(pokeData); // Set pokemon state to contain response data
    });
  };

  // Set condition for loading state
  if (Loading) {
    return "Loading...";
  }

  return (
    <div className="Pokedex">
      <h1>Pokemon</h1>
      {pokemon.map((p) => (
        <Pokecard url={p.url} name={p.name} />
      ))}
    </div>
  );
};

export default Pokedex;
