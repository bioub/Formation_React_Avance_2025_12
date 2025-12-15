import { useContext, useEffect, useState } from 'react';
import PokemonCardDetail from '../components/PokemonCardDetail';
import { getPokemon } from '../services/pokemon-service';
import { CompareContext } from '../helpers/compare-context';

function PokemonCompare() {
    const { idsToCompare } = useContext(CompareContext);
  
  const [pokemon1, setPokemon1] = useState([]);
  const [pokemon2, setPokemon2] = useState([]);

  useEffect(() => {
    getPokemon(idsToCompare[0]).then((pokemon) => setPokemon1(pokemon));
    getPokemon(idsToCompare[1]).then((pokemon) => setPokemon2(pokemon));
  }, [idsToCompare]);

  if (idsToCompare.length !== 2) {
    return <div>Please select exactly two Pokémon to compare.</div>;
  }

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
