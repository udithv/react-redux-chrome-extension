import { FETCH_USER, FETCH_DOCKS } from '../types';

const currentDockReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_USER:
            return action.payload.current_dock;
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

