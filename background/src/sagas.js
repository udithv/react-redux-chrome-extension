import { put, takeEvery, all, call } from 'redux-saga/effects'
import { getTabInfo } from './interface';
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

    yield put({ type: 'LOGIN_USER', payload: user.data });
}

export function* fetchWebPage() {
    const data = yield getTabInfo();
    const { favIconUrl, title, url } = data[0];
    const webobj = {
        favIconUrl,
        title,
        url
    };
    
    yield put({ type: 'SHOW_WEBPAGE_DETAILS' , payload: webobj});
}

export function* fetchDocks() {
    const dockConfig = {
        method: 'get',
        url: 'http://localhost:5000/api/docks'
    }

    const res = yield call(request, dockConfig);
    console.log(res.data);

    yield put({ type: 'ADD_DOCKS', payload: res.data.docks });

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

export function* watchFetchWebPage() {
    yield takeEvery('FETCH_WEBPAGE', fetchWebPage);
}

export function* watchFetchDocks() {
    yield takeEvery('FETCH_DOCKS', fetchDocks);
}


/* 
    Root Saga
 */

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchSayHi(),
      watchFetchUser(), 
      watchFetchWebPage(),
      watchFetchDocks()
    ])
  }