import {combineReducers} from 'redux';

import auth from './auth';
import test from './test';
import { selectedWebPage, submittedWebPage, currentWebpagesReducer} from './webpage';
import { currentDockReducer, nextCurrentDockReducer, docksReducer } from './dock';

export default combineReducers({
  auth,
  current_dock: currentDockReducer,
  nxt_curr_dock: nextCurrentDockReducer,
  docks: docksReducer,
  selected_webpage: selectedWebPage,
  submitted_webpage: submittedWebPage,
  webpages: currentWebpagesReducer,
  test
});