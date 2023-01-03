import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => {
  const IMG_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  // Get the URL for each pokemon
  const url = props.url;
  //Declare a variable to store each pokemon's index
  let idNum;
  //Use a for loop to subtract out to indexes of the pokemon from their URLs
  if (url.length === 37) {
    idNum = url.substring(34, 36);
  } else {
    idNum = url.substring(34, 35);
  }

  // Initialize the image URL for each pokemon
  let Img_RC = `${IMG_URL}${idNum}.png`;

  return (
    <div className="pokecard">
      <h1>{props.name}</h1>
      <img src={Img_RC} alt="A pokemon" />
      <button>Stats</button>
    </div>
  );
};

export default Pokecard;
