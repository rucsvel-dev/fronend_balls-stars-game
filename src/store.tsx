import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';

export const reducer = combineReducers({

});

const SagaMiddleware = createSagaMiddleware();

function* rootSaga() {

}

export const store = configureStore({
    reducer,
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [],
            },
        }),
        SagaMiddleware,
    ],
});
SagaMiddleware.run(rootSaga);
