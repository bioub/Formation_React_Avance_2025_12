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