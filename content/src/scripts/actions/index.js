import axios from 'axios';
import { FETCH_USER } from '../constants';

export const fetchUser = (message) => {
    console.log("action");
    
    return { 
        type: FETCH_USER, 
        payload: message
    };
}

/* export const fetchUser = () => async dispatch => {
    console.log("action");
    const res = await axios.get("http://localhost:5000/api/current_user");

    dispatch({ type: FETCH_USER, payload: res.data});
}; */