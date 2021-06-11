import axios from 'axios';
import { Tecnology } from '../interfaces/Tecnology';

//const API = process.env.API || 'http://localhost:4000/api';

const API = process.env.API || 'https://subcentroback.herokuapp.com/api';

export const getTecnologies = async () => {
    return await axios.get<Tecnology[]>(`${API}/tecnology`);
}

export const getTecnology = async (id: string) => {
    return await axios.get<Tecnology>(`${API}/tecnology/${id}`);
}

export const createTecnology = async (tecnology: Tecnology, config: any) => {
    return await axios.post(`${API}/tecnology`, tecnology, config);
}

export const editTecnology = async (id: string, tecnology: Tecnology, config: any) => {
    return await axios.put(`${API}/tecnology/${id}`, tecnology, config);
}

export const deleteTecnology = async (id: string | undefined) => {
    return await axios.delete(`${API}/tecnology/${id}`)
}