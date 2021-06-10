import {SET_LOADING_PROJECTS, SET_PROJECTS, ProjectState, SET_PROJECT, SET_EDIT_PROJECT_SUCCESS, SET_DELETE_PROJECT_SUCCESS} from '../types';

const initialState: ProjectState = {
    projects: [],
    projectById: {},
    loading: false
}

export default function reducer(state = initialState, action: any){
    const {type, payload} = action;
    switch(type){
        case SET_PROJECTS:
            return {
                ...state,
                projects: payload
            }
        case SET_PROJECT:
                return {
                    ...state,
                    projectById: payload.projectById
            }
        case SET_EDIT_PROJECT_SUCCESS:
            const updatedprojects = state.projects?.splice(
                state.projects?.findIndex(project => project._id === payload.projectUpdated._id), 
                0, 
                payload.projectUpdated
                );
            return {
                ...state,
                projects: updatedprojects
            }
        case SET_LOADING_PROJECTS:
            return {
                ...state,
                loading: payload
            }
        case SET_DELETE_PROJECT_SUCCESS:
            const filteredProjects = state.projects?.filter(project => project._id !== payload.projectDeleted._id);
            return {
                ...state,
                projects: filteredProjects
            }
        default:
            return state;
    }
}
