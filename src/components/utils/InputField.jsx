import React from 'react';
import propTypes from 'prop-types';

export const InputField = (props) => {
    return <input onChange={props.onHandle} value={props.value} type={props.type} />
}

InputField.propTypes = {
    onHandle: propTypes.func,
}