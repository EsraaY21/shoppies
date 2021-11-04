import { useContext } from 'react';
import { MovieContext, ACTIONS } from '../store/movieStore';
import useFetch from '../hooks/useFetch';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Search() {
  const { state, dispatch } = useContext(MovieContext);
  // const API_URL = `https://www.omdbapi.com/?s=${state.search}&type=movie&apikey=f5a645be`;
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${state.search}&page=1`;

  useFetch(API_URL);

  function handleChange(e) {
    const newSearchValue = e.target.value;
    dispatch({ type: ACTIONS.SEARCH, payload: newSearchValue });
  }

  return (
    <div className="Search">
      <div className="container">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i class="bi bi-search"></i>
            </span>
          </div>
          <input
            className="form-control"
            type="text"
            value={state.search}
            onChange={(e) => handleChange(e)}
            disabled={state.nominatedMovies.length > 4}
            aria-describedby="basic-addon1"
            placeholder="Search movie"
          />
        </div>
      </div>
    </div>
  );
}
