import { SET_ERROR, SET_LOADING, SET_SUCCESS, SET_USER, LOGOUT } from "../store/types";
import { User } from "./User";

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
    showPassword2?: boolean;
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

export type AuthAction = setUserAction | setLoadingAction | SignOutAction | SetErrorAction | SetSuccessAction;