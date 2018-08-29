import { put, takeEvery, all, call } from 'redux-saga/effects'
import { getTabInfo, openTabs } from './interface';
import request from 'axios';

const ROOT_URL = 'http://localhost:5000';

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

export function* openDockTabs(action) {
    yield openTabs(action.payload);
}


/* 
    USER WORKERS
*/
export function* fetchUser() {
    const userConfig = {
        method: 'get',
        url: `${ROOT_URL}/api/current_user`,
    }
    const user = yield call(request, userConfig);

    yield put({ type: 'LOGIN_USER', payload: user.data });
}

/* 
    WEBPAGE WORKERS
 */

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

export function* getWebPages(action) {
    
    const webPageConfig = {
        method: 'get',
        url: `${ROOT_URL}/api/webpages/${action.payload}`,
    };

    const res = yield call(request, webPageConfig);

    yield put({ type: 'SET_WEBPAGES', payload: res.data.webpages })
    
}

export function* clearWebPages() {
    yield put({ type: 'RESET_WEBPAGES' })
}

export function* deleteWebPage(action) {

    const webPageConfig = {
        method: 'delete',
        url: `${ROOT_URL}/api/webpages`,
        data: action.payload
    };

    const res = yield call(request, webPageConfig);

    yield put({ type: 'GET_WEBPAGES', payload: action.payload.dockid });

}

/* 
    DOCK WORKERS
*/

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

export function* deleteDock(action) {
    const dockConfig = {
        method: 'delete',
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
    WATCHER SAGAS
 */

export function* watchSayHi() {
    yield takeEvery('SAY_HI', sayHi)
}

export function* watchOpenTabs() {
    yield takeEvery('OPEN_TABS', openDockTabs);
}

/* 
    USER WATCHERS
 */

export function* watchFetchUser() {
    yield takeEvery('FETCH_USER', fetchUser);
}



/* 
    WEBPAGE WATCHERS
 */

export function* watchFetchWebPage() {
    yield takeEvery('FETCH_WEBPAGE', fetchWebPage);
}

export function* watchDockWebPage() {
    yield takeEvery('DOCK_WEBPAGE', dockWebPage);
}

export function* watchGetWebpages() {
    yield takeEvery('GET_WEBPAGES', getWebPages);
}

export function* watchClearWebPages() {
    yield takeEvery('CLEAR_WEBPAGES', clearWebPages);
}

export function* watchDeleteWebpage() {
    yield takeEvery('DELETE_WEBPAGE', deleteWebPage);
}

/* 
    DOCK WATCHERS
 */

export function* watchFetchDocks() {
    yield takeEvery('FETCH_DOCKS', fetchDocks);
}

export function* watchAddDock() {
    yield takeEvery('ADD_DOCK', addDock);
}

export function* watchDeleteDock() {
    yield takeEvery('DELETE_DOCK', deleteDock);
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
      watchOpenTabs(),
      watchFetchUser(), 
      watchFetchWebPage(),
      watchDockWebPage(),
      watchGetWebpages(),
      watchClearWebPages(),
      watchDeleteWebpage(),
      watchFetchDocks(),
      watchAddDock(),
      watchDeleteDock(),
      watchSetCurrentDock()
    ])
  }