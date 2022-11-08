import axios from "axios"
import {
    GET_USER_PROFILE_BEGINS,
    GET_USER_PROFILE_FAILURE,
    GET_USER_PROFILE_SUCCESS
} from "./actionTypes"

export const getUserProfile = (userName) => async (dispatch) => {

    try {
        dispatch({
            type: GET_USER_PROFILE_BEGINS,
            payload: {}
        })
        const response = await axios.get(`https://api.github.com/users/${userName}`);
        dispatch({
            type: GET_USER_PROFILE_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: GET_USER_PROFILE_FAILURE,
            payload: {}
        })
    }
}