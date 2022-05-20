import React from 'react';
import { Nav } from './components/Nav';
import AddClub from '../clubs/AddClub';
import { AddUser } from '../users/AddUser';
import { Footer } from './components/Footer';
import { HomePage } from './HomePage';
import { Route, Switch } from 'react-router-dom';
import './styles/mains.css'
import { Clubs } from '../clubs/Clubs';



export const MainPage = () => {
    return (
        <main>

            <Nav />
            <Switch>
                <Route path="/addclub" component={AddClub} />
                <Route path="/adduser" component={AddUser} />
                <Route path="/clubs" component={Clubs} />
                <Route exact path="/" component={HomePage} />
            </Switch>
            <Footer />

        </main>
    )
}