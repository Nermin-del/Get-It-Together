import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Button } from '../utils/Button';
import { useSelector } from 'react-redux';

const ClubList = (props) => {
    const activeClubs = useSelector(state => state?.counter);
    return (
        <div>
            <h1>Aktiva klubbar: {activeClubs}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Klubbnamn</th>
                        <th>Beskrivning</th>
                        <th>Telefon</th>
                    </tr>
                </thead>
                <tbody>
                    {props.clubs.map((club, i) => {
                        return (
                            <tr key={club.id}>
                                <td>{club.name}</td>
                                <td>{club.description}</td>
                                <td>{club.phone}</td>
                                <td><Button onHandleClick={() => props.onDelete(club.id)}>Ta bort</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

ClubList.propTypes = {
    clubs: propTypes.array
}

export default ClubList
