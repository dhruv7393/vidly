import React from 'react';
import PropTypes from 'prop-types';

const Liked = ({_id, liked, handleUpdateLike}) => {
    return ( <i className={"fa fa-heart"+ (liked? '':'-o')} onClick={()=> handleUpdateLike(_id)}></i> );
}

Liked.propTypes ={
    _id: PropTypes.string, 
    liked: PropTypes.bool, 
    handleUpdateLike: PropTypes.func
}

export default Liked;