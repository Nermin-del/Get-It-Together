import React from 'react';
import { TextField } from '../utils/TextField';
import { InputField } from '../utils/InputField';

export const ClubForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <h1>Lägg till klubb</h1>
        <div className='form-item'>
            <TextField children="clubnamn" />
            <InputField onHandle={props.onHandleClub} value={props.valueClub} />
        </div>
        <div className='form-item'>
            <TextField children="telefon" />
            <InputField onHandle={props.onHandlePhone} value={props.valuePhone} type="number" />
        </div>
        <div className='form-item'>
            <TextField children="beskrivning" />
            <InputField onHandle={props.onHandleDesc} value={props.valueDesc} />
        </div>
        <button onClick={props.addNewClub} type='submit'>Lägg till klubb</button>

        <button onClick={props.deleteNewClub} type='submit'>Ta bort senaste klubben</button>
    </form>
    )
}