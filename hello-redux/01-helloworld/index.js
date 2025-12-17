import { legacy_createStore as createStore } from 'redux';

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

// Reducer (Pure function)
// const nextState = reducer(currentState, { type: 'ANY_ACTION' });

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + 1,
        },
      };
    case 'FETCH_POKEMONS':
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          loading: true,
        },
      };
    case 'FETCH_POKEMONS_SUCCESS':
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          data: action.pokemons,
          loading: false,
        },
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log('State updated:', store.getState());
});

store.dispatch({ type: 'INCREMENT_COUNTER' });
store.dispatch({ type: 'FETCH_POKEMONS' });
store.dispatch({ type: 'FETCH_POKEMONS_SUCCESS', pokemons: ['Pikachu', 'Bulbasaur'] });