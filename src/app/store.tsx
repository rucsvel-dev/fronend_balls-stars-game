import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';

import homeReducer from "@modules/Home/HomeSlice";


const rootReducer = combineReducers({
    home: homeReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware({}),
    ],
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store
