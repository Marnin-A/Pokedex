import React, { useState } from "react";
import Pokecard from "./components/Pokecard";

function App() {
  return (
    <div>
      <Pokecard id={4} name="Charmander" type="fire" base_experience={62} />
    </div>
  );
}

export default App;
