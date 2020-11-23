import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';

import themeReducer from './reducers/themeReducer';

import tecnologyReducer from './reducers/tecnologyReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    tecnology: tecnologyReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;