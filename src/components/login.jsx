import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, handleLogin } from '../redux/actions/loginActions';

const Login = () => {
    const dispatch = useDispatch()
    const username = useSelector(state => state.login.username)
    const password = useSelector(state => state.login.password)
    const usernameError = useSelector(state => state.login.usernameError)
    const passwordError = useSelector(state => state.login.passwordError)

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(handleLogin(username, password))
    }

    const handleChangeOfInut = e =>{
        dispatch(handleChange(e.target.id, e.target.value))
    }

    return ( 
    <div>
        <h1>Login</h1>
        <form onSubmit={e =>handleSubmit(e)}>
            <input id="username" aria-describedby='username' label='Username' type='email' value={username} onChange={e =>handleChangeOfInut(e)} />
            <div className="invalid-feedback">{usernameError}</div>
            <input id="password" aria-describedby='password' label='Password' type='password' value={password} onChange={e =>handleChangeOfInut(e)} />
            <div className="invalid-feedback">{passwordError}</div>
            <button type="submit" className={"btn btn-primary" + (!usernameError && !passwordError ? '' : ' disabled')}>Submit</button>
        </form>
    </div> );
}
 
export default Login;