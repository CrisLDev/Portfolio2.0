import {ThunkAction} from 'redux-thunk';

import {THEME_MODE, ThemeAction} from '../types';

import { RootState } from '..';

// Toogle Mode
export const toogleMode = (mode: string): ThunkAction<void, RootState, null, ThemeAction> => {
    return dispatch => {
        dispatch({
            type: THEME_MODE,
            payload: mode
        })
    }
}