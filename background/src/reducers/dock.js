import { FETCH_USER, FETCH_DOCKS } from '../types';

const currentDockReducer = (state = null, action) => {
    switch(action.type) {
        case FETCH_USER:
            return action.payload ? action.payload.current_dock : null;
        default:
            return state;
    }
}

const docksReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_DOCKS:
            return action.payload;
        default:
            return state;
    }
}

export {
    currentDockReducer,
    docksReducer
}

