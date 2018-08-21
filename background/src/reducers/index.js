import {combineReducers} from 'redux';

import auth from './auth';
import test from './test';
import webpage from './webpage';

export default combineReducers({
  auth,
  webpage,
  test
});