import { configureStore } from '@reduxjs/toolkit';
import { fetchPokemons, fetchPokemonsSuccess, incrementCounter, counterReducer, pokemonsReducer } from './slices.js';
import { counterValueSelector, pokemonsDataSelector } from './selectors.js';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  }
});

store.subscribe(() => {
  console.log('Count:', counterValueSelector(store.getState()));
  console.log('Pokemons:', pokemonsDataSelector(store.getState()));
});

store.dispatch(incrementCounter());
store.dispatch(fetchPokemons());
store.dispatch(fetchPokemonsSuccess(['Pikachu', 'Bulbasaur']));