import axios from 'axios';
import { FETCH_USER } from '../constants';

export const fetchUser = () => {

    
    return { 
        type: FETCH_USER, 
        payload: message
    };
}

