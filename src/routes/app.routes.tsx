import React from 'react';

import {Feed} from '../Screens/Feed';
import {Profile} from '../Screens/Profile';
import {Header} from "../Screens/Header";

export function AppRoutes() {
    return (
        <>
            <Header neighborhoodName="Jabaquara"/>
            <Feed/>
            <Profile profileId=""/>
        </>
    )
}