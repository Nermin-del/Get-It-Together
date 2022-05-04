import React from 'react';
import { NavLink } from 'react-router-dom';
import './maincomponents.css';

export const Nav = () => {
    return (
        <>
            <h1>Get It together</h1>
            <nav className='Nav'>
                <ul>
                    <li>
                        <NavLink to='/'>Start</NavLink>
                    </li>
                    <li>
                        <NavLink to='/addclub'>Lägg till klubb</NavLink>
                    </li>
                    <li>
                        <NavLink to='/adduser'>Lägg till användare</NavLink>
                    </li>
                    <li>
                        <NavLink to='/clubs'>Klubbar</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
