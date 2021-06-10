import {ThunkAction} from 'redux-thunk';

import {SET_TECNOLOGIES, SET_REGISTER_TECNOLOGY_FAIL, TecnologiesAction, SET_GET_TECNOLOGIES_FAIL, SET_LOADING_TECNOLOGIES, SET_REGISTER_TECNOLOGY_SUCCESS, SET_TECNOLOGY, SET_GET_TECNOLOGY_FAIL, SET_EDIT_TECNOLOGY_SUCCESS, SET_EDIT_TECNOLOGY_FAIL, SET_DELETE_TECNOLOGY_SUCCESS, SET_DELETE_TECNOLOGY_FAIL} from '../types';

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


// Load Tecnology
export const getTecnology = (id: string): ThunkAction<void, RootState, null, TecnologiesAction> => async dispatch => {
    try {
        dispatch(setLoading(true));
        const tecnology = await tecnologyService.getTecnology(id);
        dispatch({
            type: SET_TECNOLOGY,
            payload: tecnology.data
        });
        dispatch(setSuccess('Tecnology loaded successfully'));
        return dispatch(setLoading(false));
    } catch (err){
        const errors = err.response.data.errors;
        dispatch({
            type: SET_GET_TECNOLOGY_FAIL
        });
        dispatch(setError(errors[0].msg));
        return dispatch(setLoading(false));
    }
}

// Register Tecnology
export const registerTecnology = (data: Tecnology): ThunkAction<void, RootState, null, TecnologiesAction> => {
    return async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const tecnologyData: Tecnology = {
            name: data.name,
            es_resume: data.es_resume,
            es_description: data.es_description,
            en_resume: data.en_resume,
            en_description: data.en_description,
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

// Edit Tecnology
export const editTecnology = (id: string, data: Tecnology): ThunkAction<void, RootState, null, TecnologiesAction> => {
    return async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const tecnologyData: Tecnology = {
            name: data.name,
            es_resume: data.es_resume,
            es_description: data.es_description,
            en_resume: data.en_resume,
            en_description: data.en_description,
            url: data.url,
            urlImage: data.urlImage
        }

        try {
            dispatch(setLoading(true));
            const res = await tecnologyService.editTecnology(id, tecnologyData, config);
            dispatch({
                type: SET_EDIT_TECNOLOGY_SUCCESS,
                payload: res.data
            });
            dispatch(setSuccess('Tecnologies updated successfully'));
            toast.success("Tecnología editada correctamente.");
            return dispatch(setLoading(false));
        } catch (err) {
            const errors = err.response.data.errors;
            dispatch(setError(errors[0].msg));
            dispatch({
                type: SET_EDIT_TECNOLOGY_FAIL
            });
        }

    }
}

// Delete Tecnology
export const deleteTecnology = (id: string | undefined): ThunkAction<void, RootState, null, TecnologiesAction> => {
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            const res = await tecnologyService.deleteTecnology(id);
            dispatch({
                type: SET_DELETE_TECNOLOGY_SUCCESS,
                payload: res.data
            })
            dispatch(setSuccess('Tecnology Deleted successfully'));
            toast.success('Tecnología eliminada correctamente');
            return dispatch(setLoading(false));
        } catch (err) {
            const errors = err.response.data.errors;
            dispatch(setError(errors[0].msg));
            dispatch({
                type: SET_DELETE_TECNOLOGY_FAIL
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