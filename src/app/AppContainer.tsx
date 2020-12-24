import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {HomePage} from "@pages/HomePage";

export const AppContainer: React.FC<{}> = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </>
    );
};
