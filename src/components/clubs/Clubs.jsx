import React, { useEffect, useState } from 'react';
import { ClubList } from './ClubList';
import { useEffect } from 'react';
import { get } from '../server/get';



export const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        get(setClubs);
    }, []);
    return <ClubList clubs={clubs} />
}