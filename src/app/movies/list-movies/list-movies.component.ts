import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MoviesState } from '../reducers.movies';
import { LoadMovies, MovieSelected } from '../actions.movies';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
   listMovies:any[];
   loading:boolean;
   isError:boolean;
   message:string;

  constructor(
    private store:Store<MoviesState>
    ) {
      this.store.dispatch(new LoadMovies)
    }

  ngOnInit() {
    this.store.select('movies').subscribe((resource) => {
      this.listMovies = resource.listMovies;
      this.loading = resource.loading;
      this.isError = resource.isError.status;
      this.message = resource.isError.message;
    })
  }

  movieSelected(movie){
    this.store.dispatch(new MovieSelected(movie))
  }

}
