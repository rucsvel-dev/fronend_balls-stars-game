import { endLoadAssets, startLoadAssets } from './CommonSlice';
import { take, call, put, fork, throttle, delay } from 'redux-saga/effects';

function* checkLoadAssets(){
    yield take(startLoadAssets)
    yield delay(2000)
    yield put(endLoadAssets());
}

export function* commonSaga() {
    yield fork(checkLoadAssets)
}
