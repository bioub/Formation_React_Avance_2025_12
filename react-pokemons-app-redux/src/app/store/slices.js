import { createSlice } from "@reduxjs/toolkit";

// State initial
const initialState = { 
  pokemons: {
    data: [],
    loading: false,
    error: null,
    filter: '',
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
    setFilter(state, action) {
      state.filter = action.payload;
    }
  },
});

export const { fetchPokemons, fetchPokemonsSuccess, setFilter } = pokemonsSlice.actions;
export const pokemonsReducer = pokemonsSlice.reducer;

