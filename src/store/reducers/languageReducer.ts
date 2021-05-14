import {LanguageState, LANGUAGE_MODE} from '../types';

const initialState: LanguageState = {
    language: localStorage.getItem('language')
}
export default function reducer(state = initialState, action: any) {
    const {type, payload} = action;
    switch(type){
        case LANGUAGE_MODE:
            localStorage.setItem('language', payload)
            return{
                ...state,
                language: payload
            }
        default:
            return state;
    }
}