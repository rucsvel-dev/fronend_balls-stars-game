import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ShopState} from "./shopTypes";

const initialState: ShopState = {

};

export const ShopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {

    },
});

export const {

} = ShopSlice.actions

export default ShopSlice.reducer
