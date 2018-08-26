import { put, takeEvery, all, call } from 'redux-saga/effects'
import { getTabInfo } from './interface';
import request from 'axios';

const ROOT_URL = 'http://localhost:5000';

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
        url: `${ROOT_URL}/api/current_user`,
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

    yield put({ type: 'SET_SUBMITTED_WEBPAGE' });
}

export function* dockWebPage(action) {
    const webPageConfig = {
        method: 'post',
        url: `${ROOT_URL}/api/webpages`,
        data: action.payload
    }

    const res = yield call(request, webPageConfig);

    if(res.data.success) {
        yield put({ type: 'SUBMITTED_WEBPAGE' });
    }

}

export function* fetchDocks() {
    const dockConfig = {
        method: 'get',
        url: `${ROOT_URL}/api/docks`
    }

    const res = yield call(request, dockConfig);

    yield put({ type: 'ADD_DOCKS', payload: res.data.docks });

}

export function* addDock(action) {
    const dockConfig = {
        method: 'post',
        url: `${ROOT_URL}/api/docks`,
        data: action.payload
    }
    const res = yield call(request, dockConfig);

    yield put({ type: 'FETCH_DOCKS' });
}

export function* setCurrentDock(action) {

    const dockConfig = {
        method: 'post',
        url: `${ROOT_URL}/api/docks/current_dock`,
        data: {
            dockid: action.payload
        }
    }
    const res = yield call(request, dockConfig);

    yield put({ type: 'UPDATE_CURRENT_DOCK', payload: res.data.user });

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

export function* watchDockWebPage() {
    yield takeEvery('DOCK_WEBPAGE', dockWebPage);
}

export function* watchFetchDocks() {
    yield takeEvery('FETCH_DOCKS', fetchDocks);
}

export function* watchAddDock() {
    yield takeEvery('ADD_DOCK', addDock);
}

export function* watchSetCurrentDock() {
    yield takeEvery('SET_CURRENT_DOCK', setCurrentDock);
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
      watchDockWebPage(),
      watchFetchDocks(),
      watchAddDock(),
      watchSetCurrentDock()
    ])
  }