import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MoviesState } from '../reducers.movies';

@Component({
  selector: 'app-movie-selected',
  templateUrl: './movie-selected.component.html',
  styleUrls: ['./movie-selected.component.css']
})
export class MovieSelectedComponent implements OnInit {
  movieSelected:any;
  constructor(private store:Store<MoviesState>) { }

  ngOnInit() {
    this.store.select('movies').subscribe((resource:any) => {
      this.movieSelected = resource.movieSelected;
    })
  }

}
