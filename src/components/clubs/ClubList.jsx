import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Delete } from '../server/delete';
import { Button } from '../utils/Button';
import { get } from '../server/get';

const ClubList = (props) => {
    const onDelete = (id) => {
        Delete(id)
        get(props.setClubs)
    }
    return (
        <table>
            <tbody>
                {props.clubs.map(club => {
                    return (
                        <table>
                            <thead>
                                <tr>
                                <th>Klubbnamn</th>
                                <th>Beskrivning</th>
                                <th>Telefon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={club.id}>
                                <td>{club.name}</td>
                                <td>{club.description}</td>
                                <td>{club.phone}</td>
                                <td><Button onHandleClick={() => onDelete(club.id)}>Ta bort</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
            </tbody>
        </table>
    )
}

ClubList.propTypes = {
    clubs: propTypes.array
}

export default ClubList
