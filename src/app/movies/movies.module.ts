import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SearchComponent } from './search/search.component';
import { MovieService } from './services/movie.service';
import { MoviesEffects } from './store/movies.effects';
import { moviesReducer } from './store/movies.reducer';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forFeature([MoviesEffects]),
    RouterModule.forChild([{ path: '', component: SearchComponent }]),
    EffectsModule.forFeature([MoviesEffects]),
  ],
  declarations: [SearchComponent, StarRatingComponent,FavoriteButtonComponent],
  providers: [MovieService]
})
export class MoviesModule { }
