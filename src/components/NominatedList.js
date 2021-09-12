import { MovieContext, ACTIONS } from '../store/movieStore';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function NominatedList() {
  const { state, dispatch } = useContext(MovieContext);

  return (
    <div className="NominatedList">
      <h3>
        Nominated Movies <span>{state.nominatedMovies.length}/5</span>
      </h3>
      {state.nominatedMovies.map((movie) => (
        <div key={movie.id} className="nominatedMovie">
          <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} />

          <p>{movie.title}</p>

          <FontAwesomeIcon
            icon={faTimes}
            className="delete"
            style={{ color: '#D10000' }}
            onClick={() => {
              dispatch({ type: ACTIONS.REMOVE, payload: movie.id });
            }}
          />
        </div>
      ))}
    </div>
  );
}
