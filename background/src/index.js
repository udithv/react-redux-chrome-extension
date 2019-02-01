import 'regenerator-runtime/runtime';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';

import {alias, wrapStore} from 'react-chrome-redux';

import createSagaMiddleware from 'redux-saga';


import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer, 
  applyMiddleware(
      sagaMiddleware
   )
);
sagaMiddleware.run(rootSaga)



wrapStore(store, {
  portName: 'new_app'
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("NETWORK_LOGGEER : \n");
    console.log('URL: '+details.url+' : ');
    console.log(details);
  },
  {urls: ["<all_urls>"]},
);






