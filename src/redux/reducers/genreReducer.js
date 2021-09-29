import { GET_GENRES, UPDATE_CURRENT_GENRE } from "../actions/type"

const initialState={
    genres:[],
    currentGenre:'0'
}

export default function genresReducer(state=initialState, action){
    switch(action.type){
        case GET_GENRES:
            return{
                ...state,
                genres:action.payload
            }
        case UPDATE_CURRENT_GENRE:
            return{
                ...state,
                currentGenre:action.payload
            }
        default:
            return state
    }
}