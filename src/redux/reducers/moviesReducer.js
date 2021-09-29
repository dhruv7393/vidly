import { GET_MOVIES, LIKE_MOVIE, DELETE_MOVIE, UPDATE_COLUMN_SELECTED, UPDATE_SORT_ORDER } from "../actions/type";

const initialState = {
    movies:[],
    columnSelected:'',
    sortOrder:'desc'
}

export default function moviesReducer(state=initialState, action){
    switch(action.type){
        case GET_MOVIES:
            return{
                ...state,
                movies: action.payload
            }
        case LIKE_MOVIE:
            return{
                ...state,
                movies: action.payload
            }
        case DELETE_MOVIE:
            return{
                ...state,
                movies: action.payload
            }
        case UPDATE_COLUMN_SELECTED:
            return{
                ...state,
                columnSelected: action.payload
            }
        case UPDATE_SORT_ORDER:
            return{
                ...state,
                sortOrder: action.payload
            }
        default:
            return state
    }
}