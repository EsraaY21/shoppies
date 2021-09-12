import { MovieContext } from '../store/movieStore';
import { useContext } from 'react';
import Loading from './Loading';
import NominationBadge from './NominationBadge';
import MoviesList from './MoviesList';
import Error from './Error';
import Search from './Search';

export default function MovieSection() {
  const { state } = useContext(MovieContext);

  return (
    <div className="MovieSection">
      <Search />
      <div className="movieContainer">
        {state.nominatedMovies.length > 4 && <NominationBadge />}
        {state.isLoading && state.search !== '' && <Loading />}
        {state.error && state.search !== '' && <Error />}
        {!state.isLoading && state.nominatedMovies.length < 5 && <MoviesList />}
      </div>
    </div>
  );
}
