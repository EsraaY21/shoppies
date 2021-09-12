import { MovieContext, ACTIONS } from '../store/movieStore';
import { useContext } from 'react';

export default function Movie({ movie }) {
  const { state, dispatch } = useContext(MovieContext);

  const isNominated = state.nominatedMovies.some(
    (nomin) => nomin.id === movie.id
  );

  function handleNominate(noiminatedMovie) {
    dispatch({ type: ACTIONS.NOMINATE, payload: noiminatedMovie });
  }

  let urlImage;

  urlImage = `url(http://image.tmdb.org/t/p/w300/${movie.poster_path})`;

  return (
    <div
      className="movie"
      style={{
        background: `${urlImage}`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className="content">
        <h6>{movie.title}</h6>
        <p>
          <small>{movie.release_date.slice(0, 4)}</small>
        </p>
        <button
          className="button"
          disabled={isNominated}
          onClick={() => {
            handleNominate(movie);
          }}
        >
          Nominate
        </button>
      </div>
    </div>
  );
}
