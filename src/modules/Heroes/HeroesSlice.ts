import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {HeroesState} from "./heroesTypes";

const initialState: HeroesState = {

};

export const HeroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {

    },
});

export const {

} = HeroesSlice.actions

export default HeroesSlice.reducer
