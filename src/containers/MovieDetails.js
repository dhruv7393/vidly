import React, { useState } from 'react';
import {getMovie} from '../services/fakeMovieService'
import {Redirect} from 'react-router-dom'

const MovieDetail = ({match, history}) => {
    const [movies] = useState(getMovie(match.params.movie_id) || null)
    if (!movies){
        return <Redirect to="/movies" />
    }
    return ( 
        <div>
            <h1>{movies._id}</h1>
            <button type="button" class="btn btn-primary" onClick={()=>history.push('/movies')}>Link with href</button>
        </div> 
    );
}
 
export default MovieDetail;