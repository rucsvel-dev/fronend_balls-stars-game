import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {HeroState} from "./heroTypes";

const initialState: HeroState = {

};

export const HeroSlice = createSlice({
    name: 'hero',
    initialState,
    reducers: {

    },
});

export const {

} = HeroSlice.actions

export default HeroSlice.reducer
