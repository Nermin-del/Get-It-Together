import React from 'react';
import { Nav } from './Nav';
import { AddClub } from '../clubs/AddClub';
import { Footer } from './Footer';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';


export const MainPage = () => {
    return (
        <main>

            <Nav />
            <Switch>
                <Route path="/addclub" component={AddClub} />
                <Route path="/deleteclub"> DeleteClub</Route>
                <Route exact path="/"> App </Route>
            </Switch>
            <Footer />

        </main>
    )
}