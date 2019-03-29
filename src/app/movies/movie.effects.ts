import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { ActionTypes } from './actions.movies';

@Injectable()
export class MovieEffects{
    @Effect()
      loadmovies$ = this.action.pipe(
         ofType(ActionTypes.loadMovies),
         mergeMap(() => this.moviesService.getAllMovies().pipe(
             map((movies:any) => ({type:ActionTypes.updateList,payload:movies.data.movies})),
             catchError(() => of({type:ActionTypes.isErrorLoadMovies,payload:{status:true,message:"error al cargar las peliculas"}}))
            ))
     )
    
    @Effect()
      closeLoadingMovies$ = this.action.pipe(
         ofType(ActionTypes.updateList),
         mergeMap(() => of({type:ActionTypes.loadingMovies,payload:false}))
      ) 

    @Effect()
       openLoadingMovies$ = this.action.pipe(
           ofType(ActionTypes.isErrorLoadMovies),
           mergeMap(() => of({type:ActionTypes.loadingMovies,payload:false}))
       )

    constructor(
        private action:Actions,
        private moviesService:MoviesService
    ){}
}