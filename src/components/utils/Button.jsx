import React from 'react';

export const Button = props => {
    return (
        //skapa så det läggs till något i consolen
        // skapa en state
        <button onClick={props.onHandleClick}>{props.children}</button>
    )
}