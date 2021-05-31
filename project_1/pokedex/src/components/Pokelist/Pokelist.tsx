import React from "react";
import "./Pokelist.css";
import Pokecard from "../Pokecard/Pokecard";
import { PokemonSchema } from "../../types/PokemonSchema";

interface PokelistProps {
  pokemons: PokemonSchema[];
  onPokemonClick: (pokemonName: string) => void;
}

const Pokelist = ({  pokemons, onPokemonClick }: PokelistProps) => {
  //  line - 9 can also be written as following:
  // const Pokelist = (props : PokelistProps ) => {
  // const searchedPokemons = props.searchedPokemons
  return (
    <div className="pokelist">
      {pokemons.map((pokemon) => {
        return (
          pokemon.name && (
            <Pokecard 
              key={pokemon.id}
              name={pokemon.name}
              spriteUrl={pokemon.sprites.normal}
              onPokemonClick={onPokemonClick} 
            />
          )
        );
      })}
    </div>
  );
};

export default Pokelist;
