import { UPDATE_LOGIN, LOGIN_ERRORS, UPDATE_DETAILS, INPUT_FIELD_ERROR } from "./type";
import Joi from "joi-browser";

const schema={
    username: Joi.string().min(3).required().email(),
    password: Joi.string().min(3).required()
}

export const handleLogin = (username, password) => dispatch =>{
    const error = Joi.validate({'username':username, 'password':password}, schema, {abortEarly: false})
    let errorsByField = {usernameError:'', passwordError:''}
    error.error && error.error.details.map(err => {
        errorsByField[err.context.key+"Error"]= err.message
    })
    if (error.error){
        dispatch({
            type: INPUT_FIELD_ERROR,
            payload: errorsByField
        })
    }else{
        dispatch({
            type: UPDATE_LOGIN
        })
    }
}

export const handleChange = (name, value) => dispatch =>{
    let error = Joi.validate({[name]:value}, {[name] : schema[name]}, {abortEarly: false})
    error = !error.error?'':error.error.details[0].message
    const errorName = name+"Error"
    dispatch({
        type: UPDATE_DETAILS,
        payload: {
            [name] : value
        }
    })
    dispatch({
        type: INPUT_FIELD_ERROR,
        payload: {
            [errorName] : error
        }
    })
}
