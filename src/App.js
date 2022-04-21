import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AddClub } from './components/clubs/AddClub';
import { MainPage } from './components/mains/MainPage';


export const App = () => {
    return (
       <>
            <BrowserRouter>
                <MainPage />
            </BrowserRouter>
            <AddClub />
       </>
    );
}