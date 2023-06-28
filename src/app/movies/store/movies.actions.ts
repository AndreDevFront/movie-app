import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.interface';


export const searchMovie = createAction(
  '[Movies] Search Movie',
  props<{ title: string }>()
);

export const searchMovieSuccess = createAction(
  '[Movies] Search Movie Success',
  props<{ movie: Movie }>()
);

export const searchMovieFailure = createAction(
  '[Movies] Search Movie Failure',
  props<{ error: any }>()
);

export const resetSearch = createAction('[Movies] Reset Search');
