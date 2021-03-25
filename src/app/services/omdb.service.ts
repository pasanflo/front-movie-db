import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IOmdbResponse } from '../interfaces/i-omdb-response';

@Injectable({
  providedIn: 'root'
})
class OmdbService {
  url = 'http://www.omdbapi.com/';
  apiKey = '46741dd1';
  type = 'movie';
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }

  /**
  * Get data from the OmdbApi
  * map the result to return only the results that we need
  *
  * @param {string} title Search Term
  * @returns Observable with the search results
  */
  searchData(title: string): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${this.type}&apikey=${this.apiKey}`).pipe(
      map(results => results as IOmdbResponse)
    );
  }

  /**
  * Get the detailed information for an ID using the "i" parameter
  *
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getDetails(id: string) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}

export default OmdbService;
