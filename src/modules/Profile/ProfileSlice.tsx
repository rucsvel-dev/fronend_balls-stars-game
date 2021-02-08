import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ProfileState} from "./profileTypes";

const initialState: ProfileState = {

};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
});

export const {

} = ProfileSlice.actions

export default ProfileSlice.reducer
