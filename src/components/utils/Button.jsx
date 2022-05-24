import React from 'react';
import propTypes from 'prop-types';

export const Button = props => {
    return (
        
        <button type={props.type} onClick={props.onHandleClick}>{props.children}</button>

    )
}

Button.propTypes = {
    type: propTypes.string 
}