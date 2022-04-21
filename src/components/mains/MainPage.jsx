import React from 'react';
import { Nav } from './Nav';
import { AddClub } from '../clubs/AddClub';
import { DeleteClub } from '../clubs/DeleteClub';
import { Footer } from './Footer';
import { Route, Switch } from 'react-router-dom';



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