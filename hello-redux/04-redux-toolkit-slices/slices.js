import { createSlice } from "@reduxjs/toolkit";

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

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: initialState.pokemons,
  reducers: {
    fetchPokemons(state, action) {
      state.loading = true;
    },
    fetchPokemonsSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchPokemons, fetchPokemonsSuccess } = pokemonsSlice.actions;
export const pokemonsReducer = pokemonsSlice.reducer;

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState.counter,
  reducers: {
    incrementCounter(state, action) {
      state.value++;
    },
  },
});

export const { incrementCounter } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;