import axios from 'axios';
import { FETCH_USER } from '../constants';

export const fetchUser = /* async  */() => {
    console.log("action");
    //const res = await axios.get("http://localhost:5000/api/current_user");
    return { 
        type: FETCH_USER, 
        payload: "Hello"
    };
}

/* export const fetchUser = () => async dispatch => {
    console.log("action");
    const res = await axios.get("http://localhost:5000/api/current_user");

    dispatch({ type: FETCH_USER, payload: res.data});
}; */