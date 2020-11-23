import {ThunkAction} from 'redux-thunk';

import {SET_ERROR, SET_LOADING, SET_SUCCESS, SET_TECNOLOGIES, SET_REGISTER_TECNOLOGY, SET_REGISTER_FAIL_TECNOLOGY, TecnologiesAction, SET_GET_TECNOLOGIES_FAIL, SET_LOADING_TECNOLOGIES} from '../types';

import {setError, setSuccess} from './authAction';

import {RootState} from '..';

import * as tecnologyService from '../../services/TecnologyService';
import { Tecnology } from '../../interfaces/Tecnology';

// Load Tecnologies
export const getTecnologies = (): ThunkAction<void, RootState, null, TecnologiesAction> => async dispatch => {
    try {
        dispatch(setLoading(true));
        const tecnologies = await tecnologyService.getTecnologies();
        dispatch({
            type: SET_TECNOLOGIES,
            payload: tecnologies.data
        });
        dispatch(setSuccess('Tecnologies loaded successfully'));
        return dispatch(setLoading(false));
    } catch (err){
        const errors = err.response.data.errors;
        dispatch({
            type: SET_GET_TECNOLOGIES_FAIL
        });
        dispatch(setError(errors[0].msg));
        return dispatch(setLoading(false));
    }
}

// Loading
export const setLoading = (values: boolean): ThunkAction<void, RootState, null, TecnologiesAction> => {
    return dispatch => {
        dispatch({
            type: SET_LOADING_TECNOLOGIES,
            payload: values
        })
    }
}