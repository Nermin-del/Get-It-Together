import React from 'react';
import { Button } from '../utils/Button';
import { TextField } from '../utils/TextField';
import { InputField } from '../utils/InputField';
import propTypes from 'prop-types';

const ClubForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <h1>Lägg till klubb</h1>
        <div className='form-item'>
            <TextField text="Klubbnamn" />
            <InputField type="text" onHandle={props.onHandleClub} value={props.valueClub} />
        </div>
        <div className='form-item'>
            <TextField text="Telefon" />
            <InputField type="number" onHandle={props.onHandlePhone} value={props.valuePhone} />
        </div>
        <div className='form-item'>
            <TextField text="Beskrivning" />
            <InputField type="text" onHandle={props.onHandleDesc} value={props.valueDesc} />
        </div>
        <Button onClick={props.addNewClub} type='submit'>Lägg till klubb</Button>

        <Button onClick={props.deleteNewClub} type='submit'>Ta bort senaste klubben</Button>
    </form>
    )
}

ClubForm.propTypes = {
    valueClub: propTypes.string,
    // valuePhone: propTypes.number,
    valueDesc: propTypes.string,
}

export default ClubForm
