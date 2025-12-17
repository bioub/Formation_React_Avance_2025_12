import { useState, useEffect, useContext } from 'react';
import PokemonCard from '../components/pokemon-card';
import { getPokemons } from '../services/pokemon-service';
import { Link, Navigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import { CompareContext } from '../helpers/compare-context';
import List from '../components/list';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonsDataSelector, pokemonsErrorSelector, pokemonsLoadingSelector } from '../store/selectors';
import { fetchPokemons, fetchPokemonsSuccess } from '../store/slices';

function usePokemons() {
  const data = useSelector(pokemonsDataSelector);
  const loading = useSelector(pokemonsLoadingSelector);
  const error = useSelector(pokemonsErrorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
    getPokemons()
      .then((pokemons) => dispatch(fetchPokemonsSuccess(pokemons)))  
  }, []);

  return { data, loading, error };
}

function PokemonList() {
  const { idsToCompare } = useContext(CompareContext);
  const { data: pokemons, loading, error } = usePokemons();

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch />
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && (
            <List
              items={pokemons}
              renderItem={(pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              )}
            />
          )}
        </div>
      </div>
      <Link
        className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '25px' }}
        to="/pokemon/add"
      >
        <i className="material-icons">add</i>
      </Link>
      {idsToCompare.length === 2 && (
        <Link
          className="btn-floating btn-large waves-effect waves-light blue z-depth-3"
          style={{ position: 'fixed', bottom: '25px', right: '100px' }}
          to="/pokemon/compare"
        >
          <i className="material-icons">compare</i>
        </Link>
      )}
    </div>
  );
}

export default PokemonList;
