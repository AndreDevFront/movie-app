import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.interface';
import { resetSearch, searchMovie } from '../store/movies.actions';
import * as fromMovies from '../store/movies.reducer';
import * as moviesSelectors from '../store/movies.selectors';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchForm: FormGroup;
  movie$: Observable<Movie | null>;
  error$: Observable<any | null>;



  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromMovies.MoviesState>
  ) {
    this.searchForm = this.formBuilder.group({
      title: ''
    });
    this.movie$ = this.store.select(moviesSelectors.selectMovie);
    this.error$ = this.store.select(moviesSelectors.selectError);

  }

  onSubmit() {
    const title = this.searchForm.get('title')?.value;
    this.store.dispatch(searchMovie({ title }));
  }

  onReset() {
    this.store.dispatch(resetSearch());
  }



}
