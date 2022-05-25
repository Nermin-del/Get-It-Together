import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClubList  from './ClubList';
import { useEffect } from 'react';
import { get } from '../server/get';
import { Delete } from '../server/delete';
import { clubCounterSubtract, clubCounterSet } from './actions/ClubActions';

export const Clubs = () => {
    const dispatch = useDispatch();
    const activeClubs = useSelector(state => state?.counter);
    const [clubs, setClubs] = useState([]);
    useEffect(async () => {
        setClubs(await get());
        dispatch(clubCounterSet(!activeClubs ? clubs.length : activeClubs));
    }, []);


    const onDelete = async (id) => {
        await Delete(id)
        setClubs(await get());
        
        dispatch(clubCounterSubtract(activeClubs))
    }

    return <ClubList clubs={clubs} setClubs={setClubs} onDelete={onDelete} />
}