import React from 'react';
import { useDispatch } from 'react-redux';
import {updateCurrentGenreValue} from "../redux/actions/genresAction"

const Genres = ({genres, currentGenre}) => {
    const dispatch=useDispatch()
    return ( 
        <table className="table table-bordered genres">
            <tbody>
                {genres.map(genre=><tr key={genre._id} onClick={() => dispatch(updateCurrentGenreValue(genre._id))}><td>{genre.name}</td></tr>)}
            </tbody>
        </table>
     );
}
 
export default Genres;