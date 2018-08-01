import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';

import {alias, wrapStore} from 'react-chrome-redux';

import aliases from './aliases';


const store = createStore(
  rootReducer, 
  applyMiddleware(
      alias(aliases)
   )
);


wrapStore(store, {
  portName: 'errordock'
});






