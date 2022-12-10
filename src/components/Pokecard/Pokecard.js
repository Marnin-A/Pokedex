import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => {
  const IMG_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  let Img_RC = `${IMG_URL}${props.id}.png`;
  return (
    <div className="pokecard">
      <h1>{props.name}</h1>
      <img src={Img_RC} alt="A pokemon" />
      {/* <div>Type: {props.type}</div> */}
      {/* <div>Exp: {props.base_experience}</div> */}
    </div>
  );
};

export default Pokecard;
