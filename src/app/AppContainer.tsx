import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {HomePage} from "@pages/HomePage";
import {LoginPage} from "@pages/LoginPage";
import {useSelector} from "react-redux";
import {RootState} from "@/app/store";
import {ClanPage} from "@pages/ClanPage";
import {ClansPage} from "@pages/ClansPage";
import {InventoryPage} from "@pages/InventoryPage";
import {ShopPage} from "@pages/ShopPage";
import {ProfilePage} from "@pages/ProfilePage";
import {TasksPage} from "@pages/TasksPage";
import {LeaderboardPage} from "@pages/LeaderboardPage";
import {HeroesPage} from "@pages/HeroesPage";
import {HeroPage} from "@pages/HeroPage";

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
                        <Route exact path="/profile" component={ProfilePage} />
                        <Route exact path="/clans" component={ClansPage} />
                        <Route exact path="/clans/:id" component={ClanPage} />
                        <Route exact path="/inventory" component={InventoryPage} />
                        <Route exact path="/shop" component={ShopPage} />
                        <Route exact path="/tasks" component={TasksPage} />
                        <Route exact path="/leaderboard" component={LeaderboardPage} />
                        <Route exact path="/heroes" component={HeroesPage} />
                        <Route exact path="/heroes/:id" component={HeroPage} />
                    </>
                }
            </Switch>
        </>
    );
};
