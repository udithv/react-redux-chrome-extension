import { put, takeEvery, all, call } from 'redux-saga/effects'
import { getTabInfo } from './interface';
import { ADD_WEBPAGE, DOCK_IT } from './types';
import request from 'axios';

/* 
    Worker Sagas
 */


export function* helloSaga() {
    console.log("hello Saga");
}

export function* sayHi() {
    const data = yield getTabInfo();
    const { favIconUrl, title, url } = data;

    yield put({ type: 'SAID_HI', payload: 'HI' });
}


export function* fetchUser() {
    const userConfig = {
        method: 'get',
        url: 'http://localhost:5000/api/current_user',
    }
    const user = yield call(request, userConfig);
    console.log(user);

    yield put({ type: 'LOGIN_USER', payload: user.data });
}

export function* dockIt() {
    const data = yield getTabInfo();
    const { favIconUrl, title, url } = data[0];
    const webobj = {
        favIconUrl,
        title,
        url
    };
    
    yield put({ type: ADD_WEBPAGE, payload: webobj});
}

/* 
    Watcher Sagas
 */

export function* watchFetchUser() {
    yield takeEvery('FETCH_USER', fetchUser);
}

export function* watchSayHi() {
    yield takeEvery('SAY_HI', sayHi)
}

export function* watchDocking() {
    yield takeEvery(DOCK_IT, dockIt);
}



/* 
    Root Saga
 */

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchSayHi(),
      watchFetchUser(), 
      watchDocking()
    ])
  }