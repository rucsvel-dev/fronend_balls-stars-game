import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {LoginState} from "./loginTypes";

const initialState: LoginState = {
    sessionChecked: false,
    session: false
};

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state: LoginState) => {
            state.session = null
        },
        login: (state: LoginState) => {
            state.session = true
        },
        loginWithGoogle: (state: LoginState, {payload}: any) => {

        },
        sessionChecked: (state: LoginState) => {
            state.sessionChecked = true
        },
        addSession: (state: LoginState) => {
            state.session = true
        }
    },
});

export const {
    logout,
    login,
    loginWithGoogle,
    addSession,
    sessionChecked
} = LoginSlice.actions

export default LoginSlice.reducer
