import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/?plot=full&apikey=f465007e';

  constructor(private http: HttpClient) {}

  getMovieByTitle(title: string): Observable<Movie> {
    const url = `${this.apiUrl}&t=${encodeURIComponent(title)}`;
    return this.http.get<Movie>(url)
    .pipe(
      map((response: any) => {
        if (response.Response === 'False') {
          throw new Error(response.Error);
        }
        return response as Movie;
      }),
      catchError((error : HttpErrorResponse) => {
        return throwError(() => new Error('Ocorreu um erro na busca do filme. Por favor, tente novamente mais tarde.'));
      }));
  }
}
