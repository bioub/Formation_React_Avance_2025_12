import { combineReducers } from "redux";
import { FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, INCREMENT_COUNTER } from "./constants.js";

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

export function pokemonsReducer(state = initialState.pokemons, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export function counterReducer(state = initialState.counter, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
}

// Reducer (Pure function)
// const nextState = reducer(currentState, { type: 'ANY_ACTION' });
export const reducer = combineReducers({
  pokemons: pokemonsReducer,
  counter: counterReducer,
});