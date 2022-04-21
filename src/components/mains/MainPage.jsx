import React from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Route } from 'react-router-dom';


export const MainPage = () => {
    return (
        <main>

            <Nav />
                <Route path="/addclub"> AddClub</Route>
                <Route path="/deleteclub"> DeleteClub</Route>
                <Route exact path="/"> App </Route>
            <Footer />

        </main>
    )
}