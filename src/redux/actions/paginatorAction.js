import { UPDATE_CURRENT_PAGE } from "./type";

export const updateCurrentPage = newCurrentPage => dispatch =>{
    dispatch({
        type: UPDATE_CURRENT_PAGE,
        payload: newCurrentPage
    })
}