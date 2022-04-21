import React, { useState } from 'react';


export const AddClub = () => {

    const [clubName, setClubName] = useState('');
    const [clubDescription, setClubDescription] = useState('');
    const [clubLocation, setClubLocation] = useState('');
    const [clubPhone, setClubPhone] = useState('');
    const [clubEmail, setClubEmail] = useState('');
    const [clubWebsite, setClubWebsite] = useState('');
    const [clubImage, setClubImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name : clubName,
            description : clubDescription,
            phone : clubPhone,
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


    return (
        <div>
            <h1>Add Club</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Klubbnamn </label>
                    <input onChange={onHandleClubName} value={clubName} />
                </div>
                <div>
                    <label> Tel </label>
                    <input onChange={onHandleClubPhone} value={clubPhone} />
                </div>
                <div>
                    <label> Beskrivning </label>
                    <input onChange={onHandleClubDescription} value={clubDescription} />
                </div>
                <button type='submit'>Lägg till klubb</button>
            </form>
        </div>
    );
}

