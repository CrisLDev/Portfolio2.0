import {SET_TECNOLOGIES, TecnologyState} from '../types';

const initialState: TecnologyState = {
    tecnologies: [],
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
        default:
            return state;
    }
}
