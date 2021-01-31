import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {HomeState} from "./homeTypes";
import {getMe} from "@/api/userApi/userApi";
import {AppThunk} from "@/app/store";
import {GetMeResults} from "@/api/userApi/userApiTypes";

const initialState: HomeState = {
    username: null,
    level: null,
    rating: null,
    coins: null,
    gems: null,
    specialValutes: null,
    selectedMode: 'Default mode',
    isLoading: false,
    error: null
};

export const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        getMeStart: (state: HomeState) => {
            state.isLoading = true
        },
        getMeSuccess: (state: HomeState, action: PayloadAction<GetMeResults>) => {
            const user = action.payload.user
            state.isLoading = false
            state.level = user.level
            state.coins = user.coins
            state.gems = user.gems
            state.rating = user.rating
        },
        getMeFailure: (state: HomeState, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    },
});

export const {
    getMeStart,
    getMeFailure,
    getMeSuccess
} = HomeSlice.actions

export default HomeSlice.reducer
