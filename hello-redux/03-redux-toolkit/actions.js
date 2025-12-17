import { createAction } from "@reduxjs/toolkit";

export const incrementCounter = createAction('INCREMENT_COUNTER');
export const fetchPokemons = createAction('FETCH_POKEMONS');
export const fetchPokemonsSuccess = createAction('FETCH_POKEMONS_SUCCESS');

console.log(fetchPokemonsSuccess(['Pikachu', 'Bulbasaur']));