import React from 'react';

export const InputField = (props) => {
    return <input onChange={props.onHandle} value={props.value} type={props.type} />
}