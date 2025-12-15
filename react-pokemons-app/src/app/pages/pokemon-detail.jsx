import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Loader from '../components/loader';
import { isAuthenticated } from '../services/authentication-service';
import { getPokemon } from '../services/pokemon-service';
import PokemonCardDetail from '../components/PokemonCardDetail';

function PokemonsDetail() {
  const params = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemon(Number(params.id)).then((pokemon) => setPokemon(pokemon));
  }, [params.id]);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <PokemonCardDetail pokemon={pokemon} />
          </div>
        </div>
      ) : (
        <h4 className="center">
          <Loader />
        </h4>
      )}
    </div>
  );
}

export default PokemonsDetail;
