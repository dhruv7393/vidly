import React from 'react';
import PropTypes from 'prop-types'

const Delete = ({_id, handleDelete}) => {
    return ( <button type="button" className="btn btn-danger" onClick={() => handleDelete(_id)}>Delete</button> );
}

Delete.propTypes = {
    _id: PropTypes.string,
    handleDelete: PropTypes.func
}
 
export default Delete;