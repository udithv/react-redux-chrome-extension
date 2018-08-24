import { FETCH_USER, FETCH_DOCKS } from '../types';

const currentDockReducer = (state = null, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return action.payload ? action.payload.current_dock : null;
        case 'UPDATE_CURRENT_DOCK':
            return action.payload.current_dock;
        case 'LOGOUT':
            return null;
        default:
            return state;
    }
}

const docksReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_DOCKS':
            return action.payload;
        case 'LOGOUT':
            return [];
        default:
            return state;
    }
}

export {
    currentDockReducer,
    docksReducer
}

