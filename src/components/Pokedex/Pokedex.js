import React, { useState, useEffect } from "react";
import Pokecard from "../Pokecard/Pokecard";
import axios from "axios";
import LoadingScreen from "../../assets/pokeball-loading-animation.gif";
import PokemonLogo from "../../assets/Pokémon_logo.avif";
import "./Pokedex.css";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  // Set pokemon and Loading states
  const [Loading, setLoading] = useState(true);

  // Set page counter state
  const [counter, setCounter] = useState(1);

  // Set current page url
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  //Set next page Url
  const [nextUrl, setNextUrl] = useState();

  //Set previous page Url
  const [previousUrl, setPreviousUrl] = useState();

  // Set useEffect with axios to get API data
  useEffect(() => {
    setLoading(true); // Set initial loading state
    axios.get(currentUrl).then((res) => {
      setLoading(false); // Set loading state to false after promise is fulfilled
      const pokeData = res.data.results;
      const pokeData2 = res.data;
      console.log(pokeData2);
      setPokemon(pokeData); // Set pokemon state to contain response data
      setPreviousUrl(pokeData2.previous);
      setNextUrl(pokeData2.next);

      console.log(pokeData);
    });
  }, [currentUrl]);

  // Set condition for loading state
  if (Loading) {
    return (
      <div>
        <img className="LoadingScreen" src={LoadingScreen} alt="Loading" />
      </div>
    );
  }

  // Page counter

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
    setCurrentUrl(nextUrl);
  };

  //decrease counter
  const decrease = () => {
    if (counter === 1) {
      setCounter(1);
    } else {
      setCounter((counter) => counter - 1);
      setCurrentUrl(previousUrl);
    }
  };

  return (
    <div className="Pokedex">
      <div className="title">
        <img className="PokemonLogo" src={PokemonLogo} alt="Pokemon Logo" />
      </div>
      {pokemon.map((p) => (
        <Pokecard url={p.url} name={p.name} />
      ))}
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
    </div>
  );
};

export default Pokedex;
