import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getAllMovies(){
    return this.http.get('https://yts.am/api/v2/list_movies.json');
  }
}
