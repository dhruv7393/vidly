import { GET_MOVIES, LIKE_MOVIE, DELETE_MOVIE, UPDATE_COLUMN_SELECTED, UPDATE_SORT_ORDER } from "./type";
import { getMovies } from "../../services/fakeMovieService";
import store from '../index'
import axios from 'axios'

function getCurrentMovieList() {
    return store.getState().movies.movies
}

function getCurrentSortOrder(){
    return store.getState().movies.sortOrder
}

export const getMoviesList = () => dispatch =>{

    axios.get('http://localhost:5000/movies')
        .then(function (movies) {
            console.log(movies)
          dispatch({
            type: GET_MOVIES,
            payload: movies.data
          })
        })
        .catch(function (error) {console.log(error);});

    
}

export const movieLiked = (idOfMovie) => dispatch =>{
    let movies = getCurrentMovieList()
    movies = movies.map(movie => {
        if(movie._id === idOfMovie) movie.liked = !movie.liked
        return movie
    })
    dispatch({
        type: LIKE_MOVIE,
        payload: movies
    })
}

export const deleteMovie = (idOfMovie) => dispatch =>{
    let movies = getCurrentMovieList()
    movies = movies.filter(movie => movie._id !== idOfMovie)
    dispatch({
        type: DELETE_MOVIE,
        payload: movies
    })
}

export const updateColumnSelectedValue = columnName => dispatch => {
    let corespondingColumn = {
        Title : 'title',
        Genre : 'genre',
        Stock: 'numberInStock',
        Rate : 'dailyRentalRate'
    }
    
    let new_movies_list = getCurrentMovieList()
    let sortOrder = getCurrentSortOrder()
    let new_sort_order = sortOrder === 'asc'? 'desc':'asc'
    let actualKeyName = corespondingColumn[columnName]
    if(columnName !=='Genre'){
        new_movies_list.sort((a,b) =>( (a[actualKeyName] < b[actualKeyName] && sortOrder==='asc') || (a[actualKeyName] > b[actualKeyName] && sortOrder==='desc') )&&(-1))
    }else{
        new_movies_list.sort((a,b) => ((a[actualKeyName]['name'] < b[actualKeyName]['name'] && sortOrder==='asc') || (a[actualKeyName]['name'] > b[actualKeyName]['name'] && sortOrder==='desc')) && (-1))
    }
    
    dispatch({
        type:UPDATE_COLUMN_SELECTED, 
        payload:columnName
    })

    dispatch({
        type:UPDATE_SORT_ORDER, 
        payload:new_sort_order
    })

    dispatch({
        type:GET_MOVIES, 
        payload:new_movies_list
    })
}