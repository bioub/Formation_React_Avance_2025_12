import { fetchPokemons, fetchPokemonsSuccess, incrementCounter } from './actions.js';
import { configureStore } from './configureStore.js';
import { FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, INCREMENT_COUNTER } from './constants.js';
import { counterValueSelector, pokemonsDataSelector } from './selectors.js';

const store = configureStore();

store.subscribe(() => {
  console.log('Count:', counterValueSelector(store.getState()));
  console.log('Pokemons:', pokemonsDataSelector(store.getState()));
});

store.dispatch(incrementCounter());
store.dispatch(fetchPokemons());
store.dispatch(fetchPokemonsSuccess(['Pikachu', 'Bulbasaur']));