import {RequestHandler} from 'express';
import Project, {IProject} from '../models/Project';

//@Route    Post api/project
//@desc     Create new project
//@access   Public
export const createProject: RequestHandler = async (req, res) => {
    const {name, description, tecnologies} = req.body;
    try {
        const project: IProject = new Project({
            name,
            description,
            tecnologies
        });
        const projectSaved = await project.save();
        return res.status(201).json({projectSaved});
    } catch (error) {
        return res.status(400).json({error});
    }
}

//@Route    Get api/project
//@desc     Get all projects
//@access   Public
export const getProjects: RequestHandler = async (req, res) => {
    try {
        const projects = await Project.find();
        return res.status(200).json({projects});
    } catch (error) {
        return res.status(400).json({error});
    }
}

//@Route    Get api/project/:id
//@Param    Id
//@desc     Get project by id
//@access   Public
export const getProject: RequestHandler = async (req, res) => {
    try {
        const projectById = await Project.findById(req.params.id);
        return res.status(200).json({projectById});
    } catch (error) {
        return res.status(400).json({error});
    }
}

//@Route    Put api/project/:id
//@Param    Id
//@desc     Update project by id
//@access   Private
export const editProject: RequestHandler = async (req, res) => {
    const {name, description, tecnologies} = req.body;
    try {
        const projectDataToUpdate = ({
            name,
            description,
            tecnologies
        });
        const projectUpdated = await Project.findByIdAndUpdate(req.params.id, projectDataToUpdate, {new: true});
        return res.status(201).json({projectUpdated});
    } catch (error) {
        return res.status(400).json({error});
    }
}

//@Route    Delete api/project/:id
//@Param    Id
//@desc     Delete project by id
//@access   Private
export const deleteProject: RequestHandler = async (req, res) => {
    try {
        const projectDeleted = await Project.findById(req.params.id);
        return res.status(200).json({projectDeleted});
    } catch (error) {
        return res.status(400).json({error});
    }
}