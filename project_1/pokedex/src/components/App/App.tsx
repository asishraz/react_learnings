// this project needs revision
// specially after part 12 of the tutorials

import React from "react";
import { pokemonData } from "../../data/pokemonData";
import "./App.css";
import Pokedex from "../Pokedex/Pokedex";

import {
  UnpatchedPokemonSchema,
  PokemonSpritesSchema,
  PokemonSchema,
} from "../../types/PokemonSchema";

// import { searchedPokemons } from "../Pokedex/Pokedex";

// defining the app state
export interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
  state = {
    searchField: "",
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemon: undefined,
  };

  patchPokemonData  = (pokemons: UnpatchedPokemonSchema[]) => {
    const patchedPokemons = pokemons.map((pokemon) => {
      let parsedSprites: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined,
      };

      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
      } catch (e) {
        console.log("Exception while parsing sprites: ", e);
      }

      const patchedPokemon: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites,
      };

      return patchedPokemon;
    });

    return patchedPokemons;
  };

  componentDidMount() {
    // patch the stringified pokemon sprites
    const patchedPokemons: PokemonSchema[] = this.patchPokemonData(pokemonData);

    // console.log(patchedPokemons);

    // update the state with the patched pokemons
    this.setState({
      // initially we will be seeing every pokemon on the list section
      allPokemons: patchedPokemons,
      searchedPokemons: patchedPokemons,

      // that's why searchedPokemons will be patchedPokemons as every pokemon will be there
      // searchedPokemons: patchedPokemons,

      // then as we start searching the list will decrease, therefore only
    });
  }


  handleInputChange = (inputValue: string) => {
    // filter the searched pokemons
     const { allPokemons } = this.state;
     const searchField = inputValue;

    const searchedPokemons = allPokemons.filter(
      (pokemon: PokemonSchema) => {
          return (
              pokemon.name &&
              pokemon.name
                  .toLowerCase()
                  .includes(searchField.toLowerCase())
          );
      }
    );

    this.setState({ searchField, searchedPokemons });
    
  };
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex
          pokemons={this.state.searchedPokemons}
          onInputChange={this.handleInputChange}
          onPokemonClick={this.handleClick}
          selectedPokemon={this.state.selectedPokemon}
        />
      </div>
    );
  }
}

export default App;
