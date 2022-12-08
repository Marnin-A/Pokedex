import React from "react";
import "./Pokecard.css";

const Pokecard = ({ pokemon }) => {
  const IMG_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  let Img_RC = `${IMG_URL}${pokemon.id}.png`;
  return (
    <div className="pokecard">
      <h1>{pokemon.name}</h1>
      <img src={Img_RC} alt="A pokemon" />
      <div>Type: {pokemon.type}</div>
      <div>Exp: {pokemon.base_experience}</div>
    </div>
  );
};

export default Pokecard;
