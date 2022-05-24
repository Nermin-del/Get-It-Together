import React from 'react';

export const DateGetYear = (props) => {
    return <span>{new Date().getFullYear().toString()}</span>
}