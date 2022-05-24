import React from 'react';
import propTypes from 'prop-types';

export const TextField = (props) => {
    return  <label> {props.text} </label>
}

TextField.propTypes = {
    text: propTypes.string
}