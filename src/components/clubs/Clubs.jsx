import React, { useEffect, useState } from 'react';
import { ClubList } from './ClubList';
import { useEffect } from 'react';
import axios from 'axios';



export const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    useEffect(async () => {
        const result = await axios.get('http://localhost:3000/clubs');
        setClubs(result.data)
    }, []);
    return <ClubList clubs={clubs} />
}