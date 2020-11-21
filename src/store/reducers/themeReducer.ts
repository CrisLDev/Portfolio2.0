import {ThemeState, THEME_MODE} from '../types';

const initialState: ThemeState = {
    theme: localStorage.getItem('theme')
}
export default function reducer(state = initialState, action: any) {
    const {type, payload} = action;
    switch(type){
        case THEME_MODE:
            localStorage.setItem('theme', payload)
            return{
                ...state,
                theme: payload
            }
        default:
            return state;
    }
}