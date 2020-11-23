import {ThunkAction} from 'redux-thunk';

import {SET_TECNOLOGIES, SET_REGISTER_TECNOLOGY_FAIL, TecnologiesAction, SET_GET_TECNOLOGIES_FAIL, SET_LOADING_TECNOLOGIES, SET_REGISTER_TECNOLOGY_SUCCESS} from '../types';

import {setError, setSuccess} from './authAction';

import {RootState} from '..';

import * as tecnologyService from '../../services/TecnologyService';
import { Tecnology } from '../../interfaces/Tecnology';
import {toast} from 'react-toastify';

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

export const registerTecnology = (data: Tecnology): ThunkAction<void, RootState, null, TecnologiesAction> => {
    return async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const tecnologyData: Tecnology = {
            name: data.name,
            resume: data.resume,
            description: data.description,
            url: data.url,
            urlImage: data.urlImage
        }

        try {
            dispatch(setLoading(true));
            const res = await tecnologyService.createTecnology(tecnologyData, config);
            dispatch({
                type: SET_REGISTER_TECNOLOGY_SUCCESS,
                payload: res.data
            });
            dispatch(setSuccess('Tecnologies loaded successfully'));
            toast.success("Nueva tecnología agregada.");
            return dispatch(setLoading(false));
        } catch (err) {
            const errors = err.response.data.errors;
            dispatch(setError(errors[0].msg));
            dispatch({
                type: SET_REGISTER_TECNOLOGY_FAIL
            });
        }

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
