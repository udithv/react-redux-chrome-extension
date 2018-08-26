import { FETCH_USER, FETCH_DOCKS } from '../constants';


/* 
    USER ACTIONS
*/

export const fetchUser = ()  => {
    return {
        type: FETCH_USER
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
};


/* 
    WEBPAGE ACTIONS
 */


export const fetchWebPage = () => {
    return {
        type: 'FETCH_WEBPAGE'
    }
}

export const dockWebPage = (webPageProps, dockid) => {
    console.log(dockid);
    return {
        type: 'DOCK_WEBPAGE',
        payload: {
            webPageProps,
            dockid
        }
    }
}


/* 
    DOCK ACTIONS
 */

export const fetchDocks = () => {
    return {
        type: 'FETCH_DOCKS'
    }
};

export const addDock = (dockProps) => {
    return {
        type: 'ADD_DOCK',
        payload: dockProps
    }
}

export const setCurrentDock = (dockid) => {
    return {
        type: 'SET_CURRENT_DOCK',
        payload: dockid
    }
}


