import { FETCH_USER } from '../types';

export default (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload || false;
    default:
      return state;
  }
};