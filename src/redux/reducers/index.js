import { combineReducers } from "redux";
import moviesReducer from './moviesReducer'
import genresReducer from "./genreReducer";
import paginatorReducer from './paginatorReducer'
import loginReducer from "./loginReducer";

export default combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    paginator: paginatorReducer,
    login: loginReducer
})