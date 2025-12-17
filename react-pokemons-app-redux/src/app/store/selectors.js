export function counterValueSelector(state) {
  return state.counter.value;
}

export function pokemonsDataSelector(state) {
  const filter = state.pokemons.filter.toLowerCase();
  if (filter) {
    return state.pokemons.data.filter(pokemon =>
      pokemon.toLowerCase().includes(filter)
    );
  }
  return state.pokemons.data;
}

export function pokemonsFilterSelector(state) {
  return state.pokemons.filter;
}

export function pokemonsLoadingSelector(state) {
  return state.pokemons.loading;
}

export function pokemonsErrorSelector(state) {
  return state.pokemons.error;
}