import axios from 'axios';
import { SignInData, SignUpData } from '../interfaces/Auth';
import { User } from '../interfaces/User';

const API = process.env.API || 'http://localhost:4000/api/';

export const getUsers = async () => {
    return await axios.get<User[]>(`${API}user`);
}

export const getUserById = async (id: string) => {
    return await axios.get<User>(`${API}user/${id}`);
}

export const signIn = async (data: SignInData, config: any) => {
    return await axios.post<User>(`${API}auth`, data, config);
}

export const signUp = async (data: SignUpData, config: any) => {
    return await axios.post<User>(`${API}users`, data, config);
}

export const loggedUser = async () => {
    return await axios.get<User>(`${API}auth`)
}

export const sendPasswordResetEmail = async (email: string) => {
    return await axios.post<User>(`${API}reset`, email);
}