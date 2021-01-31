import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';

import commonReducer from "@modules/Common/CommonSlice";
import {commonSaga} from "@modules/Common/CommonSaga";
import homeReducer from "@modules/Home/HomeSlice";
import {homeSaga} from "@modules/Home/HomeSaga";
import loginReducer from "@modules/Login/LoginSlice";
import {loginSaga} from "@modules/Login/LoginSaga";


const rootReducer = combineReducers({
    common: commonReducer,
    home: homeReducer,
    login: loginReducer
});

const SagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield fork(commonSaga);
    yield fork(loginSaga);
    yield fork(homeSaga);
}

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: false
        }),
        SagaMiddleware
    ],
});
SagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store
