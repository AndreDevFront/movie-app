import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/movie.interface';
import * as MoviesActions from './movies.actions';

export interface MoviesState {
  movie: Movie | null;
  error: any | null;
}

export const initialState: MoviesState = {
  movie: null,
  error: null
};

export const moviesReducer = createReducer(
  initialState,
  on(MoviesActions.searchMovieSuccess, (state, { movie }) => ({
    ...state,
    movie,
    error: null
  })),
  on(MoviesActions.searchMovieFailure, (state, { error }) => ({
    ...state,
    movie: null,
    error
  })),
  on(MoviesActions.resetSearch, (state) => ({
    ...state,
    movie: null,
    error: null
  }))
);


