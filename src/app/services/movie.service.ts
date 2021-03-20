import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
class MovieService {

  constructor(private http: HttpClient) { }


  /**
  * Get the information from MongoDB Documents
  *
  * @returns Observable with detailed information
  */
  getDetails(id: string) {
    // TODO connect to MongoDB
  }
}

export default MovieService;
