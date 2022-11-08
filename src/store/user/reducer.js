import {
    GET_USER_PROFILE_BEGINS,
    GET_USER_PROFILE_FAILURE,
    GET_USER_PROFILE_SUCCESS
} from "./actionTypes";

const initialState = {
    loading: false,
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE_BEGINS:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case GET_USER_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}

export default userReducer;