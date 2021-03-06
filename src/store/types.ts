import { User } from "../interfaces/User";

export const SET_USER = 'SET_USER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const LOGOUT = 'LOGOUT';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const ACCOUNT_DELETED = 'ACCOUNT_DELETED';
export const SET_SUCCESS = 'SET_SUCCESS';

export interface AuthState {
    token: string | null;
    user: User | null;
    authenticated: boolean;
    loading: boolean;
    error: string;
    success: string;
}

export interface SignUpData{
    fullname: string;
    username: string;
    email: string;
    password: string;
    password2?: string;
    showPassword?: boolean;
}

export interface SignInData{
    email: string;
    password: string;
    showPassword?: boolean;
}

// Actions
interface setUserAction{
    type: typeof SET_USER;
    payload: User;
}

interface setRegisterSuccessAction{
    type: typeof REGISTER_SUCCESS;
}

interface setRegisterFailAction{
    type: typeof REGISTER_FAIL;
}

interface setLoginSuccessAction{
    type: typeof LOGIN_SUCCESS;
}

interface setLoginFailAction{
    type: typeof LOGIN_FAIL;
}

interface setAuthErrorAction{
    type: typeof AUTH_ERROR;
}

interface setLoadingAction{
    type: typeof SET_LOADING;
    payload: boolean;
}

interface SignOutAction{
    type: typeof LOGOUT;
}

interface SetErrorAction{
    type: typeof SET_ERROR;
    payload: string;
} 
interface SetSuccessAction{
    type: typeof SET_SUCCESS;
    payload: string;
}

export type AuthAction = setUserAction | setRegisterFailAction | setLoginSuccessAction | setLoginFailAction |setAuthErrorAction | setRegisterSuccessAction | setLoadingAction | SignOutAction | SetErrorAction | SetSuccessAction;

export const THEME_MODE = 'THEME_MODE';

export interface ThemeState {
    theme: string | null;
}

// Actions
interface setThemeAction{
    type: typeof THEME_MODE;
    payload: string;
}


export type ThemeAction = setThemeAction;