import React, { useState } from 'react';
import { post } from '../server/post';
import { ClubForm } from './ClubForm';
import './style/clubs.css';


export const AddClub = () => {

    const [clubName, setClubName] = useState('');
    const [clubDescription, setClubDescription] = useState('');
    // const [clubLocation, setClubLocation] = useState('');
    const [clubPhone, setClubPhone] = useState('');
    const [newClub, setNewClub] = useState([])
    // const [clubEmail, setClubEmail] = useState('');
    // const [clubWebsite, setClubWebsite] = useState('');
    // const [clubImage, setClubImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        post(clubs);
        const data = {
            name: clubName,
            description: clubDescription,
            phone: clubPhone,
        }
        console.log(data);
    }

    const onHandleClubName = (e) => {
        setClubName(e.target.value);
    }

    const onHandleClubPhone = (e) => {
        setClubPhone(e.target.value);
    }

    const onHandleClubDescription = (e) => {
        setClubDescription(e.target.value);
    }

    const addNewClub = (e) => {
        e.preventDefault();
        const data = {
            name: clubName,
            description: clubDescription,
            phone: clubPhone,
            index: newClub.length
        }
        localStorage.setItem(clubName + data.index, JSON.stringify(data));
        setNewClub([...newClub, data])
    }

    const deleteNewClub = (e) => {
        e.preventDefault();
        const oneGoneArray = newClub.slice(0, length - 1);
        setNewClub(oneGoneArray)
    }

    return (
        <div>
         <ClubForm handleSubmit={handleSubmit} onHandleClub={onHandleClubName} valueClub={clubName} onHandlePhone={onHandleClubPhone} valuePhone={clubPhone}
          onHandleDesc={onHandleClubDescription} valueDesc={clubDescription} addNewClub={addNewClub} deleteNewClub={deleteNewClub} />
        </div>
    );
}


