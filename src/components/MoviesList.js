import { MovieContext } from '../store/movieStore';
import { useContext } from 'react';
import Movie from './Movie';

export default function MoviesList() {
  const { state } = useContext(MovieContext);

  return (
    <div className="MoviesList">
      {/* <div class="row">
        {state.movies.map((movie) => (
          <div class="col-md-4">
            <Movie key={movie.id} movie={movie} />
          </div>
        ))}
      </div> */}
    </div>
  );
}
