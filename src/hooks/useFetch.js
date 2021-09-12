import { useContext, useEffect } from 'react';
import { MovieContext, ACTIONS } from '../store/movieStore';
import axios from 'axios';

export default function useFetch(API_URL) {
  const { state, dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: ACTIONS.INIT });
    const timerID = setTimeout(() => {
      axios
        .get(API_URL)
        .then((response) => {
          console.log(response);
          if (response.data.results.length < 1) {
            dispatch({ type: ACTIONS.ERROR });
          } else {
            dispatch({ type: ACTIONS.SUCCESS, payload: response.data.results });
          }
        })
        .catch((error) => {});
    }, 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, [state.search]);
}
