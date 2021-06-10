import axios from 'axios';
import { Tecnology } from '../interfaces/Tecnology';

const API = 'http://localhost:4000/api/tecnology';

export const getTecnologies = async () => {
    return await axios.get<Tecnology[]>(`${API}`);
}

export const getTecnology = async (id: string) => {
    return await axios.get<Tecnology>(`${API}/${id}`);
}

export const createTecnology = async (tecnology: Tecnology, config: any) => {
    return await axios.post(`${API}`, tecnology, config);
}

export const editTecnology = async (id: string, tecnology: Tecnology, config: any) => {
    return await axios.put(`${API}/${id}`, tecnology, config);
}

export const deleteTecnology = async (id: string | undefined) => {
    return await axios.delete(`${API}/${id}`)
}