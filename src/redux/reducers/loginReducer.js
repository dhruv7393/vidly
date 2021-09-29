import { UPDATE_LOGIN, LOGIN_ERRORS, UPDATE_DETAILS, INPUT_FIELD_ERROR } from "../actions/type";

const initialState={
    username:'',
    password:'',
    usernameError:'',
    passwordError:'',
    isLoggedIn:false
}

export default function loginReducer( state = initialState, action){
    switch(action.type){
        case UPDATE_LOGIN:
            return {
                ...state,
                password: '',
                isLoggedIn: true
            }
        case UPDATE_DETAILS:
            return {
                ...state,
                ...action.payload
            }
        case INPUT_FIELD_ERROR:
            return {
                ...state,
                ...action.payload
            }
        case LOGIN_ERRORS:
            return {
                ...state,
                password:'',
                isLoggedIn:false
            }
        default:
            return state
    }
}