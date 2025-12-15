import { useEffect, useState } from 'react';
import PokemonCardDetail from '../components/PokemonCardDetail';
import { getPokemon } from '../services/pokemon-service';

function PokemonCompare() {
  const [pokemon1, setPokemon1] = useState([]);
  const [pokemon2, setPokemon2] = useState([]);

  useEffect(() => {
    getPokemon(3).then((pokemon) => setPokemon1(pokemon));
    getPokemon(4).then((pokemon) => setPokemon2(pokemon));
  }, []);

  return (
    <div className="PokemonCompare">
      <div className="row">
        <div className="col s6">
          <PokemonCardDetail pokemon={pokemon1} />
        </div>
        <div className="col s6">
          <PokemonCardDetail pokemon={pokemon2} />
        </div>
      </div>
    </div>
  );
}

export default PokemonCompare;
