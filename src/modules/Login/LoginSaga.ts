import {login, loginWithGoogle, logout, sessionChecked} from './LoginSlice';
import { take, call, put, fork } from 'redux-saga/effects';
import {getToken} from "@/utils/localStorageManager";
import {getLoginWithGoogle, getMe} from "@/api/userApi/userApi";
// import { isEmpty } from 'ramda';

function* clearUserSession() {
    yield call(logout);
}

function* checkUserSession() {
    let userSession: string;
    const jwt: any = getToken();
    if(jwt){
        userSession = yield call(getMe);
    }
    // @ts-ignore
    if (userSession) {
        yield put(login());
    } else {
        yield put(sessionChecked())
    }
}

function* saveUserSession({
    payload,
}: ReturnType<typeof loginWithGoogle>) {
    if (true) {
        yield put(login())
        // yield call(getLoginWithGoogle);
    }
}

export function* loginSaga() {
    yield fork(checkUserSession);
    while (true) {
        const action = yield take(loginWithGoogle);
        // @ts-ignore
        yield* saveUserSession(action);
        yield take(logout);
        // @ts-ignore
        yield* clearUserSession();
    }
}
