import { GET_GENRES, UPDATE_CURRENT_GENRE, UPDATE_COLUMN_SELECTED, UPDATE_SORT_ORDER, UPDATE_CURRENT_PAGE } from "./type";
import {getGenres} from "../../services/fakeGenreService";

export const getGenresList = () => dispatch =>{
    let genres = getGenres()
    genres.unshift({ _id: "0", name: "All" })
    dispatch({
        type: GET_GENRES,
        payload: genres
    })
}

export const updateCurrentGenreValue = idOfGenre => dispatch =>{
    dispatch({
        type: UPDATE_CURRENT_GENRE,
        payload:idOfGenre
    })

    dispatch({
        type:UPDATE_CURRENT_PAGE, 
        payload:1
    })

    dispatch({
        type:UPDATE_COLUMN_SELECTED, 
        payload:''
    })

    dispatch({
        type:UPDATE_SORT_ORDER, 
        payload:'desc'
    })
}