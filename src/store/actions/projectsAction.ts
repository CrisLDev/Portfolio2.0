import {ThunkAction} from 'redux-thunk';

import {SET_PROJECTS, SET_REGISTER_PROJECT_FAIL, ProjectsAction, SET_GET_PROJECTS_FAIL, SET_LOADING_PROJECTS, SET_REGISTER_PROJECT_SUCCESS, SET_PROJECT, SET_GET_PROJECT_FAIL, SET_EDIT_PROJECT_SUCCESS, SET_EDIT_PROJECT_FAIL, SET_DELETE_PROJECT_SUCCESS, SET_DELETE_PROJECT_FAIL} from '../types';

import {setError, setSuccess} from './authAction';

import {RootState} from '..';

import * as projectService from '../../services/ProjectService';
import { Project } from '../../interfaces/Project';
import {toast} from 'react-toastify';

// Load Projects
export const getProjects = (): ThunkAction<void, RootState, null, ProjectsAction> => async dispatch => {
    try {
        dispatch(setLoading(true));
        const projects = await projectService.getProjects();
        dispatch({
            type: SET_PROJECTS,
            payload: projects.data
        });
        dispatch(setSuccess('Projects loaded successfully'));
        return dispatch(setLoading(false));
    } catch (err){
        const errors = err.response.data.errors;
        dispatch({
            type: SET_GET_PROJECTS_FAIL
        });
        dispatch(setError(errors[0].msg));
        return dispatch(setLoading(false));
    }
}


// Load Project
export const getProject = (id: string): ThunkAction<void, RootState, null, ProjectsAction> => async dispatch => {
    try {
        dispatch(setLoading(true));
        const project = await projectService.getProject(id);
        dispatch({
            type: SET_PROJECT,
            payload: project.data
        });
        dispatch(setSuccess('Project loaded successfully'));
        return dispatch(setLoading(false));
    } catch (err){
        const errors = err.response.data.errors;
        dispatch({
            type: SET_GET_PROJECT_FAIL
        });
        dispatch(setError(errors[0].msg));
        return dispatch(setLoading(false));
    }
}

// Register Project
export const registerProject = (data: Project): ThunkAction<void, RootState, null, ProjectsAction> => {
    return async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const projectData: Project = {
            es_name: data.es_name,
            en_name: data.en_name,
            es_description: data.es_description,
            en_description: data.en_description,
            tecnologies: data.tecnologies,
            imgUrls: data.imgUrls,
        }

        try {
            dispatch(setLoading(true));
            const res = await projectService.createProject(projectData, config);
            dispatch({
                type: SET_REGISTER_PROJECT_SUCCESS,
                payload: res.data
            });
            dispatch(setSuccess('Projects loaded successfully'));
            toast.success("Nuevo proyecto agregado.");
            return dispatch(setLoading(false));
        } catch (err) {
            const errors = err.response.data.errors;
            dispatch(setError(errors[0].msg));
            dispatch({
                type: SET_REGISTER_PROJECT_FAIL
            });
        }

    }
}

// Edit Tecnology
export const editProject = (id: string, data: Project): ThunkAction<void, RootState, null, ProjectsAction> => {
    return async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const projectData: Project = {
            es_name: data.es_name,
            en_name: data.en_name,
            es_description: data.es_description,
            en_description: data.en_description,
            tecnologies: data.tecnologies,
            imgUrls: data.imgUrls,
        }

        try {
            dispatch(setLoading(true));
            const res = await projectService.editProject(id, projectData, config);
            dispatch({
                type: SET_EDIT_PROJECT_SUCCESS,
                payload: res.data
            });
            dispatch(setSuccess('Projects updated successfully'));
            toast.success("Proyecto editado correctamente.");
            return dispatch(setLoading(false));
        } catch (err) {
            const errors = err.response.data.errors;
            dispatch(setError(errors[0].msg));
            dispatch({
                type: SET_EDIT_PROJECT_FAIL
            });
        }

    }
}

// Delete Project
export const deleteProject = (id: string | undefined): ThunkAction<void, RootState, null, ProjectsAction> => {
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            const res = await projectService.deleteProject(id);
            dispatch({
                type: SET_DELETE_PROJECT_SUCCESS,
                payload: res.data
            })
            dispatch(setSuccess('Project Deleted successfully'));
            toast.success('Proyecto eliminado correctamente');
            return dispatch(setLoading(false));
        } catch (err) {
            const errors = err.response.data.errors;
            dispatch(setError(errors[0].msg));
            dispatch({
                type: SET_DELETE_PROJECT_FAIL
            });
        }
    }
}

// Loading
export const setLoading = (values: boolean): ThunkAction<void, RootState, null, ProjectsAction> => {
    return dispatch => {
        dispatch({
            type: SET_LOADING_PROJECTS,
            payload: values
        })
    }
}