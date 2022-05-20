import React from 'react';
import PropTypes from 'prop-types';

const ClubList = (props) => {
    return (
        <table>
            <tbody>
                {props.clubs.map((club, index) => {
                    return (
                        <tr key={index}>
                            <th>{club.name}</th>
                            <th>{club.description}</th>
                            <th>{club.phone}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

ClubList.propTypes = {
    clubs: PropTypes.array.isRequired
}

export default ClubList
