import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ClansState} from "./clansTypes";

const initialState: ClansState = {

};

export const ClansSlice = createSlice({
    name: 'clans',
    initialState,
    reducers: {

    },
});

export const {

} = ClansSlice.actions

export default ClansSlice.reducer
