import React from "react";
import Navbar from "./containers/Navbar.jsx";
import MovieDetail from './containers/MovieDetails'
import MoviesContainer from './containers/MoviesContainer'
import Customers from './containers/Customers'
import Rental from './containers/Rental'
import NotFound from './containers/NotFound'
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from "./components/login.jsx";

const App = () => {
    return ( 
        
        <div>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/movies/:movie_id' component={MovieDetail} />
                    <Route path='/movies' component={MoviesContainer} />
                    <Route path='/customers' component={Customers} />
                    <Route path='/rental' component={Rental} />
                    <Route path='/not-found' component={NotFound} />
                    <Route path='/' exact component={NotFound} />
                    <Redirect to='/not-found' />
                </Switch>
            </div>
        </div>
     );
}
 
export default App;