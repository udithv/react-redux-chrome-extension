import { FETCH_USER } from '../constants';

export const fetchUser = (message) => {
    return { 
        type: FETCH_USER, 
        payload: message
    };
}