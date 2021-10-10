import React from 'react';


import { Profile } from '../Screens/Profile';
import { Header } from "../Screens/Header";
import { MenuNav } from '../Screens/Feed/MenuNav';
import { NewPost } from '../Screens/Feed/NewPost';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export function AppRoutes() {
    return (
        <>
            <Router>
                <Header neighborhoodName="Jabaquara" />
                <MenuNav />
                <NewPost />
                <Switch>
                    <Route path="/profile/:userId">
                        <Profile />
                    </Route>
                    <Route path="/feed">
                    </Route>
                    <Route path="/">
                    </Route>
                    <Route path="/configuration">

                    </Route>
                </Switch>
            </Router>
        </>
    )
}