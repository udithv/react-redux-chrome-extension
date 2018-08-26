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

    return {
        type: 'DOCK_WEBPAGE',
        payload: {
            webPageProps,
            dockid
        }
    }
}

export const getWebPages = (dockid)  => {
    return {
        type: 'GET_WEBPAGES',
        payload: dockid
    }
}


export const deletePage = (wpid, dockid) => {
    return {
        type: 'DELETE_WEBPAGE',
        payload: { wpid, dockid }
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


/* 
    UTILITY ACTIONS  
*/

export const openTabs = (urls) => {
    return { 
        type: 'OPEN_TABS',
        payload: urls
    }
}