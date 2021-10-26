import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import { Profile } from '../Screens/Profile';
import { Header } from '../Screens/Header';
import { MenuNav } from '../Screens/Feed/MenuNav';
import { NewPost } from '../Screens/Feed/NewPost';
import { UserSettings } from '../Screens/UserSettings';
import { ROUTES } from './index';


export function AppRoutes() {
    return (
        <>
            <Router>
                <Header neighborhoodName="Jabaquara" />
                <Switch>
                    <Route path="/profile/:userId">
                        <Profile />
                    </Route>
                    <Route path={ROUTES.CONFIGURATIONS}>
                        <UserSettings />
                    </Route>
                    <Route path="/">
                        <MenuNav />
                        <NewPost />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}