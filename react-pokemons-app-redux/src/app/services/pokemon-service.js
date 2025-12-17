import POKEMONS from '../models/mock-pokemon';

export function isEmpty(data) {
  return Object.keys(data).length === 0;
}

export async function getPokemons() {
  if (import.meta.env.DEV) {
    const response = await fetch('http://localhost:3001/pokemons');
    return await response.json();
  }

  return POKEMONS;
}

export async function getPokemon(id) {
  if (import.meta.env.DEV) {
    const response = await fetch(`http://localhost:3001/pokemons/${id}`);
    const data = await response.json();
    return isEmpty(data) ? null : data;
  }

  return POKEMONS.find((p) => p.id === id);
}

export async function updatePokemon(pokemon) {
  if (import.meta.env.DEV) {
    const response = await fetch(
      `http://localhost:3001/pokemons/${pokemon.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return await response.json();
  }

  const index = POKEMONS.findIndex((p) => p.id === pokemon.id);
  POKEMONS[index] = pokemon;
  return pokemon;
}

export async function deletePokemon(pokemon) {
  if (import.meta.env.DEV) {
    const response = await fetch(
      `http://localhost:3001/pokemons/${pokemon.id}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return await response.json();
  }

  const index = POKEMONS.findIndex((p) => p.id === pokemon.id);
  POKEMONS.splice(index, 1);
  return {};
}

export async function addPokemon(pokemon) {
  delete pokemon.created;

  if (import.meta.env.DEV) {
    const response = await fetch(`http://localhost:3001/pokemons`, {
      method: 'POST',
      body: JSON.stringify(pokemon),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  }

  POKEMONS.push(pokemon);
  return pokemon;
}

export async function searchPokemon(term) {
  if (import.meta.env.DEV) {
    const response = await fetch(`http://localhost:3001/pokemons?q=${term}`);
    return await response.json();
  }

  return POKEMONS.filter((p) => p.name?.includes(term));
}
