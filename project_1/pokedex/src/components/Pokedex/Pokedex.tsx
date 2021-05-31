import * as React from "react";
import "./Pokedex.css";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import Searchbox from "../Searchbox/Searchbox";
import Pokelist from "../Pokelist/Pokelist";
import { PokemonSchema } from "../../types/PokemonSchema";



interface PokedexProps {
  pokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
  onInputChange: (inputValue: string) => void;
  onPokemonClick: (pokemonName: string) => void;
}
const Pokedex = ({ 
  pokemons,
  selectedPokemon,
  onInputChange,
  onPokemonClick,
}: PokedexProps) => {
  return (
    <div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox onInputChange={onInputChange} />
                <Pokelist onPokemonClick={onPokemonClick} pokemons={pokemons} />
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult selectedPokemon={selectedPokemon} />
            </div>
        </div>
  );
};

export default Pokedex;
