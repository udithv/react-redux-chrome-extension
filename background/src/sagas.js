import { put, takeEvery, all, call } from 'redux-saga/effects'
import { getTabInfo } from './interface';
/* 
    WORKER SAGAS
 */

export function* helloSaga() {
    console.log("hello Saga");
}

export function* sayHi() {
    const data = yield getTabInfo();
    const { favIconUrl, title, url } = data;

    yield put({ type: 'SAID_HI', payload: 'HI' });
}


/* 
    WATCHER SAGAS
 */

export function* watchSayHi() {
    yield takeEvery('SAY_HI', sayHi)
}

export function* watchOpenTabs() {
    yield takeEvery('OPEN_TABS', openDockTabs);
}


/* 
    Root Saga
 */

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchSayHi(),
    ])
  }