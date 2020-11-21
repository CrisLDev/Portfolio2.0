import axios from 'axios';
import { Tecnology } from '../interfaces/Tecnology';

const API = 'http://localhost:4000/api/tecnology';

export const getTecnologies = async () => {
    return await axios.get<Tecnology[]>(`${API}`);
}

export const createTecnology = async (tecnology: Tecnology) => {
    return await axios.post(`${API}`, tecnology);
}