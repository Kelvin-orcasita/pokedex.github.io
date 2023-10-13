import { datos } from "./pintarPokemon.js";

export const getPokemons = async (pokemons) => {
  const lista = pokemons.results

  lista.map(async id => {
    const pokemon = await fetch(
      `${id.url}`
    );
    const parsedPokemon = await pokemon.json();
    datos(parsedPokemon)
    return parsedPokemon;
  })
};