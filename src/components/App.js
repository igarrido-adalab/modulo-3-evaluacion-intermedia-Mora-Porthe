import React from "react";
import pokemons from "../data/pokemons.json";
import PokeList from "./PokeList";
import Pokemons from "./Pokemon";
import "../stylesheets/App.css";

function App() {
  return (
    <div>
      App
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;
