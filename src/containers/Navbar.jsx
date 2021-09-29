import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
    const [currentTab, setCurrentTab] = useState(window.location.pathname.split('/')[1])

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Vidly</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={"nav-link "+ (currentTab==='movies' && 'active')} aria-current="page" to="/movies" onClick={()=>{setCurrentTab('movies')}}>Movies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"nav-link "+ (currentTab==='customers' && 'active')} to="/customers" onClick={()=>{setCurrentTab('customers')}}>Customers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"nav-link "+ (currentTab==='rental' && 'active')} to="/rental" onClick={()=>{setCurrentTab('rental')}}>Rental</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"nav-link "+ (currentTab==='login' && 'active')} to="/login" onClick={()=>{setCurrentTab('login')}}>Login</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;