import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { post } from '../server/post';
import { get } from '../server/get';
import ClubForm from './ClubForm';
import './style/clubs.css';
import { useHistory } from "react-router-dom";
import { clubCounterAdd, clubCounterSet, clubCounterSubtract } from './actions/ClubActions';

const AddClub = () => {
    navigate = useHistory();
    const activeClubs = useSelector(state => state?.counter);
    // error boundary test

    // var r = Math.random();
    // if (r < 0.2) {
    //     throw new Error('Something went wrong');
    // }

    const [clubName, setClubName] = useState('');
    const [clubDescription, setClubDescription] = useState('');
    // const [clubLocation, setClubLocation] = useState('');
    const [clubPhone, setClubPhone] = useState(0);
    const [newClub, setNewClub] = useState([])
    // const [clubEmail, setClubEmail] = useState('');
    // const [clubWebsite, setClubWebsite] = useState('');
    // const [clubImage, setClubImage] = useState('');
    const dispatch = useDispatch();

    const onHandleClubName = (e) => {
        setClubName(e.target.value);
    }

    const onHandleClubPhone = (e) => {
        setClubPhone(e.target.value);
    }

    const onHandleClubDescription = (e) => {
        setClubDescription(e.target.value);
    }

    useEffect(() => {
        let isMounted = true;
        get().then((clubs) => {
            if (isMounted) {
                setNewClub(clubs);
                dispatch(clubCounterSet(clubs.length));
            }
        }).catch(err => console.log(err));
        return () => { isMounted = false }
    }, []);

    const addNewClub = async (e) => {
        e.preventDefault();
        const data = {
            name: clubName,
            description: clubDescription,
            phone: clubPhone,
            index: newClub.length
        }

        post(data)
        setNewClub(await get());
        dispatch(clubCounterAdd(activeClubs))
        navigate.push("/clubs")
        // const result = await axios.get('http://localhost:3000/clubs');
        // setNewClub(result.data)
    }

    const deleteNewClub = (e) => {
        e.preventDefault();
        const oneGoneArray = newClub.slice(0, length - 1);
        setNewClub(oneGoneArray)
        dispatch(clubCounterSubtract(activeClubs))
    }

    return (
        <div>
            <h1>Aktiva klubbar: {activeClubs}</h1>
            {/* <p>{r}</p> */}
            {/* <ClubList clubs={newClub} /> */}
            <ClubForm handleSubmit={addNewClub} onHandleClub={onHandleClubName} valueClub={clubName} onHandlePhone={onHandleClubPhone} valuePhone={clubPhone}
                onHandleDesc={onHandleClubDescription} valueDesc={clubDescription} addNewClub={addNewClub} deleteNewClub={deleteNewClub} />
        </div>
    );
}


export default AddClub;