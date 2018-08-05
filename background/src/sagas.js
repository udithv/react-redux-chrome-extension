import { put, takeEvery, all } from 'redux-saga/effects'
import { getTabInfo } from './interface';
import { ADD_WEBPAGE, DOCK_IT } from './types';


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
      watchDocking()
    ])
  }