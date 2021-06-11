import axios from 'axios';
import { Project } from '../interfaces/Project';

//const API = process.env.API || 'http://localhost:4000/api';

const API = process.env.API || 'https://subcentroback.herokuapp.com/api';

export const getProjects = async () => {
    return await axios.get<Project[]>(`${API}/project`);
}

export const getProject = async (id: string) => {
    return await axios.get<Project>(`${API}/project/${id}`);
}

export const createProject = async (project: Project, config: any) => {
    return await axios.post(`${API}/project`, project, config);
}

export const editProject = async (id: string, project: Project, config: any) => {
    return await axios.put(`${API}/project/${id}`, project, config);
}

export const deleteProject = async (id: string | undefined) => {
    return await axios.delete(`${API}/project/${id}`)
}