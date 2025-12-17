import { combineReducers } from "redux";
import { fetchPokemons, fetchPokemonsSuccess, incrementCounter } from "./actions.js";
import { createReducer } from "@reduxjs/toolkit";

// State initial
const initialState = { 
  pokemons: {
    data: [],
    loading: false,
    error: null,
    filter: '',
  },
  counter: {
    value: 0,
    
  }
};

export const pokemonsReducer = createReducer(initialState.pokemons, (builder) => {
  builder
    .addCase(fetchPokemons, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchPokemonsSuccess, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
});

export const counterReducer = createReducer(initialState.counter, (builder) => {
  builder
    .addCase(incrementCounter, (state, action) => {
      state.value++;
    });
});

// Reducer (Pure function)
// const nextState = reducer(currentState, { type: 'ANY_ACTION' });
export const reducer = combineReducers({
  pokemons: pokemonsReducer,
  counter: counterReducer,
});