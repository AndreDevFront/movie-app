import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MovieService } from '../services/movie.service';
import * as MoviesActions from './movies.actions';

@Injectable()
export class MoviesEffects {
  searchMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.searchMovie),
      mergeMap(({ title }) =>
        this.movieService.getMovieByTitle(title).pipe(
          map((movie) => MoviesActions.searchMovieSuccess({ movie })),
          catchError((error) => of(MoviesActions.searchMovieFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}
}
