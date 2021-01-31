import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {HomePage} from "@pages/HomePage";
import {LoginPage} from "@pages/LoginPage";
import {useSelector} from "react-redux";
import {RootState} from "@/app/store";

export const AppContainer: React.FC<{}> = () => {
    const session = useSelector(
        (state: RootState) => state.login.session
    )
    return (
        <>
            <Switch>
                {!session ?
                    <>
                        <Redirect exact from="/**" to="/" />
                        <Route exact path="/" component={LoginPage} />
                    </>
                        :
                    <>
                        <Route exact path="/home" component={HomePage} />
                    </>
                }
            </Switch>
        </>
    );
};
