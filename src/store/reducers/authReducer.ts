import {SET_ERROR, 
    SET_LOADING, 
    SET_SUCCESS, 
    SET_USER, 
    LOGOUT, 
    LOGIN_SUCCESS, 
    REGISTER_SUCCESS,
    ACCOUNT_DELETED,
    REGISTER_FAIL,
    LOGIN_FAIL,
    AUTH_ERROR} from '../types';
import {AuthState} from '../../interfaces/Auth';

const initialState: AuthState = {
    token: localStorage.getItem('token'),
    user: null,
    authenticated: false,
    loading: false,
    error: '',
    success: ''
}

export default function reducer(state = initialState, action: any) {
    const {type, payload} = action;
    switch(type){
        case SET_USER:
            return {
                ...state,
                user: payload,
                authenticated: true
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                authenticated: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
        case ACCOUNT_DELETED:
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                token: null,
                authenticated:false
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload
            }
        case SET_SUCCESS:
            return{
                ...state,
                success: payload
            }
        default:
            return state;
    }
}