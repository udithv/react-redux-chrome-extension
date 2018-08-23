import {combineReducers} from 'redux';

import auth from './auth';
import test from './test';
import webpage from './webpage';
import { currentDockReducer, docksReducer } from './dock';

export default combineReducers({
  auth,
  webpage,
  current_dock: currentDockReducer,
  docks: docksReducer,
  test
});