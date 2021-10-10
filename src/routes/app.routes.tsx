import React from 'react';

import {Feed} from '../Screens/Feed';
import {Profile} from '../Screens/Profile';
import {Header} from "../Screens/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export function AppRoutes() {
    return (
        <>
            <Router>
                <Header neighborhoodName="Jabaquara"/>
                <Switch>
                    <Route path="/profile">
                        <Profile profileId={""}/>
                    </Route>
                    <Route path="/feed">
                        <Feed/>
                    </Route>
                    <Route path="/">
                        <Feed/>
                    </Route>
                    <Route path="/configuration">

                    </Route>
                </Switch>
            </Router>
        </>
    )
}