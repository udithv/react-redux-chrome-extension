import 'regenerator-runtime/runtime';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';

import {alias, wrapStore} from 'react-chrome-redux';

import createSagaMiddleware from 'redux-saga';


import { helloSaga } from './sagas'
import aliases from './aliases';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer, 
  applyMiddleware(
      alias(aliases),
      sagaMiddleware
   )
);
sagaMiddleware.run(helloSaga)



wrapStore(store, {
  portName: 'errordock'
});






