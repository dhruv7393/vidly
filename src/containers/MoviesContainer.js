import React, {useEffect} from "react";
import Genres from "../components/genres";
import Movies from "../components/movies";
import Paginator from "../common/paginator";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesList } from "../redux/actions/moviesAction";
import {getGenresList} from '../redux/actions/genresAction'

const MoviesContainer = () => {
    const dispatch = useDispatch()

    // Movie data

    let movies = useSelector(state => state.movies.movies)
    useEffect(()=>{
        dispatch(getMoviesList())
    },[dispatch])

    //Table Column Selection data
    const columnSelected = useSelector(state => state.movies.columnSelected)
    const sortOrder = useSelector(state => state.movies.sortOrder)

    //Genre data

    const genres = useSelector(state => state.genres.genres)
    useEffect(()=>{
        dispatch(getGenresList())
    },[dispatch])

    const currentGenre = useSelector(state => state.genres.currentGenre)

    // Pagination data
    const currentPage = useSelector(state => state.paginator.currentPage)
    const numberOfEntriesPerPage = 3

    const currentMovieList = (currentGenre==='0'?movies:movies.filter(movie => movie.genre._id === currentGenre)).filter((movie, currentIndex) => (currentPage-1)*numberOfEntriesPerPage <= currentIndex && currentIndex < (currentPage*numberOfEntriesPerPage))
    const allMoviesThatCanBeDisplayed = (currentGenre==='0'?movies:movies.filter(movie => movie.genre._id === currentGenre))


    if(typeof(movies)=='undefined' || movies.length === 0)
    return (<p>There are no movies in database</p>)

    return ( 
        <main className="container">
            <h1>Movie List</h1>
            <Genres genres={genres} currentGenre={currentGenre} />
            <div className="displayMovies">
                <p>Showing {movies.length} movies</p>
                <Movies movies={currentMovieList} currentPage={currentPage} numberOfEntriesPerPage={numberOfEntriesPerPage} columnSelected={columnSelected} sortOrder={sortOrder} />
                <Paginator numberOfEntries={allMoviesThatCanBeDisplayed.length} numberOfEntriesPerPage={numberOfEntriesPerPage} currentPage={currentPage} />
            </div>
        </main>
    );
    

    
}

export default MoviesContainer;