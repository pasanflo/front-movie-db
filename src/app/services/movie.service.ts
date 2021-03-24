import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateUpdateMovie } from '../interface/i-create-update-movie';

@Injectable()
export class MovieService {
  private BASE_URL = 'http://localhost:3000/api/movies';

  private createMovieURL = this.BASE_URL + '/create';
  private readAllMoviesURL = this.BASE_URL + '/readAll';
  private updateMovieURL = this.BASE_URL + '/update';
  private deleteMovieURL = this.BASE_URL + '/delete/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  readAllMovies() {
    return this.httpClient.get(this.readAllMoviesURL, this.httpOptions);
  }

  createUpdateMovie(movieDetails: ICreateUpdateMovie) {
    if (movieDetails._id === '' || movieDetails._id === undefined) {
      delete movieDetails._id;
      return this.httpClient.post(
        this.createMovieURL,
        movieDetails,
        this.httpOptions
      );
    }
    return this.httpClient.post(
      this.updateMovieURL,
      movieDetails,
      this.httpOptions
    );
  }

  deleteMovie(id: string) {
    return this.httpClient.delete(this.deleteMovieURL + id, this.httpOptions);
  }
}
