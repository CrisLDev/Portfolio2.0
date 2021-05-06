import {SET_LOADING_TECNOLOGIES, SET_TECNOLOGIES, TecnologyState, SET_TECNOLOGY, SET_EDIT_TECNOLOGY_SUCCESS} from '../types';

const initialState: TecnologyState = {
    tecnologies: [],
    tecnologyById: {},
    loading: false
}

export default function reducer(state = initialState, action: any){
    const {type, payload} = action;
    switch(type){
        case SET_TECNOLOGIES:
            return {
                ...state,
                tecnologies: payload
            }
        case SET_TECNOLOGY:
                return {
                    ...state,
                    tecnologyById: payload.tecnologyById
            }
        case SET_EDIT_TECNOLOGY_SUCCESS:
            const updatedTecnologies = state.tecnologies?.splice(
                state.tecnologies?.findIndex(tecnology => tecnology._id === payload.tecnologyUpdated._id), 
                0, 
                payload.tecnologyUpdated
                );
            return {
                ...state,
                tecnologies: updatedTecnologies
            }
        case SET_LOADING_TECNOLOGIES:
            return {
                ...state,
                loading: payload
            }
        default:
            return state;
    }
}
