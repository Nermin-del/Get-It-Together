import React from 'react';
import { HashRouter } from 'react-router-dom';
import { MainPage } from './components/mains/MainPage';


export const App = () => {
    return (
       <>
            <HashRouter>
                <MainPage />
            </HashRouter>
       </>
    );
}