import axios from 'axios';
import { FETCH_USER } from '../constants';

/* export const fetchUser = async dispatch => {
    const res = await axios.get("http://localhost:5000/api/current_user");
    dispatch({ 
        type: FETCH_USER, 
        payload: res.data
    });
}
 */
export const fetchUser = () => async dispatch => {
    /* const res = await axios.get("http://localhost:5000/api/current_user");

    dispatch({ type: FETCH_USER, payload: res.data}); */
    return {
        type: FETCH_USER,
        payload: 'Hello World!!'
    }
};