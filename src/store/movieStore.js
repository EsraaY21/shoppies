import React, { createContext, useReducer } from 'react';

export const MovieContext = createContext();

export const ACTIONS = {
  INIT: 'INIT',
  SUCCESS: 'SUCCESS',
  SEARCH: 'SEARCH',
  NOMINATE: 'NOMINATE',
  REMOVE: 'REMOVE',
  ERROR: 'ERROR',
};

const initialState = {
  movies: [],
  isLoading: true,
  search: '',
  nominatedMovies: [],
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INIT:
      return { ...state, isLoading: true, error: false };
    case ACTIONS.SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
        error: false,
      };
    case ACTIONS.ERROR:
      return { ...state, movies: [], isLoading: false, error: true };
    case ACTIONS.SEARCH:
      return { ...state, search: action.payload };
    case ACTIONS.NOMINATE:
      return {
        ...state,
        nominatedMovies: [...state.nominatedMovies, action.payload],
      };
    case ACTIONS.REMOVE:
      return {
        ...state,
        nominatedMovies: [
          ...state.nominatedMovies.filter(
            (movie) => action.payload !== movie.id
          ),
        ],
      };
    default:
      return state;
  }
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = { state, dispatch };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};
