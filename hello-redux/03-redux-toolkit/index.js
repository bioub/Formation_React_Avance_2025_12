import { configureStore } from '@reduxjs/toolkit';
import { fetchPokemons, fetchPokemonsSuccess, incrementCounter } from './actions.js';
import { counterValueSelector, pokemonsDataSelector } from './selectors.js';
import { reducer } from './reducer.js';

const store = configureStore({
  reducer: reducer
});

store.subscribe(() => {
  console.log('Count:', counterValueSelector(store.getState()));
  console.log('Pokemons:', pokemonsDataSelector(store.getState()));
});

store.dispatch(incrementCounter());
store.dispatch(fetchPokemons());
store.dispatch(fetchPokemonsSuccess(['Pikachu', 'Bulbasaur']));