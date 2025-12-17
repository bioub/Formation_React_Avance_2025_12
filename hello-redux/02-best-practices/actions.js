import { FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, INCREMENT_COUNTER } from "../03-redux-toolkit/constants";

export function incrementCounter() {
  return { type: INCREMENT_COUNTER };
}

export function fetchPokemons() {
  return { type: FETCH_POKEMONS };
}

export function fetchPokemonsSuccess(pokemons) {
  return { type: FETCH_POKEMONS_SUCCESS, payload: pokemons };
}

// Flux Standard Action (FSA) format
// {
//   type: 'ACTION_TYPE',
//   payload: any,
//   error: boolean,
//   meta: any
// }