import { render } from '@testing-library/react';
import { test } from 'vitest';
import PokemonCardDetail from './PokemonCardDetail';
import { MemoryRouter } from 'react-router-dom';

test('PokemonCardDetails renders correctly', () => {
  const pokemon = {
    id: 1,
    name: 'Bulbasaur',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    created: new Date('2020-01-01'),
    types: ['grass', 'poison'],
    height: 7,
    weight: 69,
    abilities: ['overgrow', 'chlorophyll'],
  };

  // Render the component and perform assertions
  render(
    <MemoryRouter>
      <PokemonCardDetail pokemon={pokemon} />
    </MemoryRouter>
  );
});

//