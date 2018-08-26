import {combineReducers} from 'redux';

import auth from './auth';
import test from './test';
import { selectedWebPage, submittedWebPage } from './webpage';
import { currentDockReducer, docksReducer } from './dock';

export default combineReducers({
  auth,
  current_dock: currentDockReducer,
  docks: docksReducer,
  selected_webpage: selectedWebPage,
  submitted_webpage: submittedWebPage,
  test
});