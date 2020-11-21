import {ThunkAction} from 'redux-thunk';

import {SET_ERROR, LOGOUT, SET_USER, SET_SUCCESS, SET_LOADING, AuthAction, SignInData, SignUpData, REGISTER_SUCCESS, AUTH_ERROR, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL} from '../types';

import { RootState } from '..';
import * as authService from '../../services/AuthService';
import setAuthToken from '../../utils/setAuthToken';
import { toast } from 'react-toastify';

// Load User
export const loadUser = (): ThunkAction<void, RootState, null, AuthAction> => async dispatch => {
    if(localStorage.getItem('token')){
        setAuthToken(localStorage.getItem('token'));
        try{
            const res = await authService.loggedUser();
            dispatch({
                type: SET_USER,
                payload: res.data
            })
            return dispatch(setLoading(false));
        } catch (err){
            dispatch({
                type: AUTH_ERROR
            })
        }
    }
    dispatch(setLoading(false));
    dispatch({
        type: AUTH_ERROR
    })
}

// Register User
export const register = (data: SignUpData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const userData: SignUpData = {
            email: data.email,
            fullname: data.fullname,
            username: data.username,
            password: data.password
        }

        try {
            const res = await authService.signUp(userData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            dispatch(loadUser());
            toast.success('Te has registrado correctamente.');
        } catch (err) {
            onError();
            const errors = err.response.data.errors;
            dispatch(setError(errors[0].msg));
            dispatch({
                type: REGISTER_FAIL
            });
            return toast.error(errors[0].msg);
        }
    }
}

// LogIn User
export const login = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {

        const userData: SignInData = {
            email: data.email,
            password: data.password
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await authService.signIn(userData, config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
    
            dispatch(loadUser());

            toast.success('Te has logeado correctamente.');

        } catch (err) {
            onError();
            const errors = err.response.data.errors;
            dispatch(setError(errors[0].msg));
            toast.error(errors[0].msg);
            dispatch({
                type: LOGIN_FAIL
            })
        }
    }
}

// Log Out
export const logout = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            dispatch({type:LOGOUT});
            dispatch(setLoading(false));
            return toast.success('Te has deslogeado correctamente.');
        } catch (err) {
            console.log(err);
            dispatch(setLoading(false));
        }
    }
}

// Loading
export const setLoading = (values: boolean): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_LOADING,
            payload: values
        })
    }
}

// Error
export const setError = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_ERROR,
            payload:msg
        })
    }
}

// Set Success
export const setSuccess = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_SUCCESS,
            payload: msg
        })
    }
}