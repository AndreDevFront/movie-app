import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './movies.reducer';

export const selectMovieState = createFeatureSelector<MoviesState>('movies');

export const selectMovie = createSelector(
  selectMovieState,
  state => state.movie
);

export const selectError = createSelector(
  selectMovieState,
  state => state.error
);
