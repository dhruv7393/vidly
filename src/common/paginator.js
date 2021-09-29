import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {updateCurrentPage} from '../redux/actions/paginatorAction'
import { useDispatch } from 'react-redux';

const Paginator = ({numberOfEntries, numberOfEntriesPerPage, currentPage}) => {
    let dispatch = useDispatch()
    let Pages = []
    for (let i = 1; i <= Math.ceil(numberOfEntries/numberOfEntriesPerPage); i++) {
        Pages.push(<li className={"page-item"+(i===currentPage?' active':'')} { ...( i===currentPage && { 'aria-current': 'page' } ) }  key={i}><Link className="page-link" to="#" onClick={()=> dispatch(updateCurrentPage(i))}>{i}</Link></li>);
    } 
    return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {Pages}
            </ul>
        </nav>
     );
}

Paginator.propTypes = {
    numberOfEntries: PropTypes.number,
    numberOfEntriesPerPage : PropTypes.number, 
    currentPage : PropTypes.number
}
 
export default Paginator;