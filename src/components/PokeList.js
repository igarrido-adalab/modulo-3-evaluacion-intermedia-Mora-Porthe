import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const items = this.props.pokemons.map((pokemon) => {
      return (
        <li id={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default PokeList;
