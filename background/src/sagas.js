import { delay } from "redux-saga";
import { put, takeEvery, all } from 'redux-saga/effects'

export function* helloSaga() {
    console.log("hello Saga");
}

export function* sayHi() {
    yield delay(100);
    console.log("hi u lucky bastard")
    yield put({ type: 'SAID_HI', payload: 'HI'});
}

export function* watchSayHi() {
    yield takeEvery('SAY_HI', sayHi)
}

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchSayHi()
    ])
  }