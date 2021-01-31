import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CommonState} from "./commonTypes";

const initialState: CommonState = {
    isNewSession: true,
    assetsLoaded: false
};

export const CommonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        sessionStart: (state: CommonState) => {
            state.isNewSession = false
        },
        startLoadAssets: (state: CommonState) => {

        },
        endLoadAssets: (state: CommonState) => {
            console.log('dsa')
            state.assetsLoaded = true
        },
    },
});

export const {
    sessionStart,
    startLoadAssets,
    endLoadAssets
} = CommonSlice.actions

export default CommonSlice.reducer
