import React, { useEffect, useState } from 'react';
import ClubList  from './ClubList';
import { useEffect } from 'react';
import axios from 'axios';
import { get } from '../server/get';

export const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    useEffect(async () => {
        get(setClubs)
    }, []);
    return <ClubList clubs={clubs} setClubs={setClubs} />
}