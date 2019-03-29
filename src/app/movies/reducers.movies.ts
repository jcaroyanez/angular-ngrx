import { ActionTypes, Actions } from './actions.movies';

export interface MoviesState {
    listMovies:any[],
    loading:boolean,
    isError:{status:boolean,message:string},
    movieSelected:{}
}
export const initialState:MoviesState = { listMovies:[],loading:true, isError:{status:false,message:null},movieSelected:null};

export function movieReducer(state = initialState, action:Actions){
    switch (action.type) {
        case ActionTypes.updateList:
            return{
                ...state,
                listMovies:[...state.listMovies,...action.payload]
            }
        case ActionTypes.loadingMovies:
            return {
                ...state,
                loading:action.payload
            } 
        case ActionTypes.isErrorLoadMovies:
            return {
                ...state,
                isError:{status:action.payload.status,message:action.payload.message}
            }
        case ActionTypes.movieSelected:
            return {
                ...state,
                movieSelected:action.payload
            }           
        default:
            return state;
    }
}