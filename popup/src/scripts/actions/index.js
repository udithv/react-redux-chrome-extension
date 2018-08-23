import { FETCH_USER, FETCH_DOCKS } from '../constants';


export const fetchUser = (user)  => {
    return {
        type: FETCH_USER,
        payload: user
    }
};


export const fetchDocks = (docks) => {
    return {
        type: FETCH_DOCKS,
        payload: docks
    }
};
