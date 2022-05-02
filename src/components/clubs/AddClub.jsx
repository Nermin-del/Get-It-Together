import React, { useState } from 'react';
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

    const getClubFromLocalStorage = (e) => {
        const data = localStorage.getItem(clubName);
        console.log(data);
    }

    const deleteNewClub = (e) => {
        e.preventDefault();
        const oneGoneArray = newClub.slice(0, length - 1);
        setNewClub(oneGoneArray)
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h1>Lägg till klubb</h1>
                <div className='form-item'>
                    <label> Klubbnamn </label>
                    <input onChange={onHandleClubName} value={clubName} />
                </div>
                <div className='form-item'>
                    <label> Tel </label>
                    <input onChange={onHandleClubPhone} value={clubPhone} />
                </div>
                <div className='form-item'>
                    <label> Beskrivning </label>
                    <input onChange={onHandleClubDescription} value={clubDescription} />
                </div>
                <button onClick={addNewClub} type='submit'>Lägg till klubb</button>

                <button onClick={deleteNewClub} type='submit'>Ta bort senaste klubben</button>
            </form>

            <table>
                <tbody>
                    {newClub.map((club) => {
                        return (
                            <tr key={club.index}>
                                <th>{club.name}</th>
                                <th>{club.description}</th>
                                <th>{club.phone}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}


