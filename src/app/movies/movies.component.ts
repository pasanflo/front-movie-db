import { Component, OnInit } from '@angular/core';
import OmdbService from '../services/omdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  searchText = "Toy Story"
  movies = [];

  constructor(
    private omdbService: OmdbService
  ) { }

  ngOnInit(): void {
    this.omdbService.searchData(this.searchText).subscribe((movies) => {
      this.movies = movies["Search"];
      console.log(this.movies);
    });
  }

  getFavouriteMovies() {

  }

  ngOnDestroy(): void {

  }
}
