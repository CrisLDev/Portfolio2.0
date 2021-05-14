import {ThunkAction} from 'redux-thunk';

import {LANGUAGE_MODE, LanguageAction} from '../types';

import { RootState } from '..';

// Toogle Language
export const toogleLanguage = (mode: string): ThunkAction<void, RootState, null, LanguageAction> => {
    return dispatch => {
        dispatch({
            type: LANGUAGE_MODE,
            payload: mode
        })
    }
}