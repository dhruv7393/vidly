import { UPDATE_CURRENT_PAGE } from "../actions/type";

const initialState = {
    currentPage:1
}

export default function paginatorReducer(state=initialState, action){
    switch(action.type){
        case UPDATE_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}