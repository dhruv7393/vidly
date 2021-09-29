import React from 'react';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteMovie, movieLiked, updateColumnSelectedValue } from '../redux/actions/moviesAction';

const Movies = ({movies, currentPage, numberOfEntriesPerPage, columnSelected, sortOrder}) => {
    const dispatch = useDispatch()
    const columnNames=['Title', 'Genre', 'Stock', 'Rate']
    return ( 
        <table className="table">
            <thead>
                <tr>
                    {columnNames.map(columnTitle =><th scope="col" key={columnTitle} onClick={()=>dispatch(updateColumnSelectedValue(columnTitle))}>{columnTitle} {columnSelected===columnTitle && (sortOrder ==='asc'? <i className="fa fa-caret-up"></i>: <i className="fa fa-caret-down"></i>)}</th>)}
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie, currentIndex) => 
                        (movie.numberInStock > 0) &&
                        (
                        <tr key={movie._id}>
                            <td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><i className={"fa fa-heart"+ (movie.liked? '':'-o')} onClick={()=> dispatch(movieLiked(movie._id))}></i></td>
                            <td><button type="button" className="btn btn-danger" onClick={() => dispatch(deleteMovie(movie._id))}>Delete</button></td>
                        </tr>
                        )
                    )
                }
            </tbody>
        </table>
            
     );
}
 
export default Movies;