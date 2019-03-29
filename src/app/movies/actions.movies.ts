import { Action } from '@ngrx/store';

export enum ActionTypes{
    updateList = '[Movies component] updateList',
    loadMovies = '[Movies component] loadMovies',
    loadingMovies = '[Movies component] loadingMovies',
    isErrorLoadMovies = '[Movies component] isError load movies',
    movieSelected = '[Movies component] movieSelected'
}

export class UpdateList implements Action{
    readonly type = ActionTypes.updateList;

    constructor(public payload:any[]){}
}

export class LoadMovies implements Action{
    readonly type = ActionTypes.loadMovies;
}

export class LoadingMovies implements Action{
    readonly type = ActionTypes.loadingMovies;

    constructor(public payload:boolean){}
}

export class IsErrorLoadMovies implements Action{
    readonly type = ActionTypes.isErrorLoadMovies;

    constructor(public payload:{status:boolean,message:string},){}
}

export class MovieSelected implements Action{
    readonly type = ActionTypes.movieSelected;

    constructor(public payload:{}){}
}

export type Actions = UpdateList |
                      LoadMovies |
                      LoadingMovies |
                      IsErrorLoadMovies |
                      MovieSelected;