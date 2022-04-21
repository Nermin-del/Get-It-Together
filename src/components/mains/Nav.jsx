import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/mains.css';

export const Nav = () => {
    return (
        <nav className='Nav'>
            <ul>
                <li><NavLink to='/addclub'>Lägg till klubb</NavLink></li>
                <li><NavLink to='/deleteclub'>Ta bort klubb</NavLink></li>
            </ul>
        </nav>
    )
}
