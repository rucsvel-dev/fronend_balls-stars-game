import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ClanState} from "./clanTypes";

const initialState: ClanState = {

};

export const ClanSlice = createSlice({
    name: 'clan',
    initialState,
    reducers: {

    },
});

export const {

} = ClanSlice.actions

export default ClanSlice.reducer
