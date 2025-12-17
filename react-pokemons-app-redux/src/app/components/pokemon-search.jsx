import { useDispatch, useSelector } from 'react-redux';
import { pokemonsFilterSelector } from '../store/selectors';
import { setFilter } from '../store/slices';

function PokemonSearch() {
  const term = useSelector(pokemonsFilterSelector);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    const term = event.target.value;
    dispatch(setFilter(term));
  }

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Rechercher un pokémon"
                value={term}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonSearch;
