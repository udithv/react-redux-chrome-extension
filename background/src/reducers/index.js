import {combineReducers} from 'redux';

import auth from './auth';
import test from './test';
import webpages from './webpages';

export default combineReducers({
  auth,
  webpages,
  test
});