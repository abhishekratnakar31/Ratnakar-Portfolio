import Project from "../models/Project.js";

export const getAllProjects= async(req,res)=>{
    try{
        const projects = await Project.find().sort({createdAt: -1});
        res.status(200).json(projects);
    }catch(error){
        res.status(500).json({message:"Server Error"});
    }
};

export const createProject = async(req,res)=>{
    try{
        const project = await Project.create(req.body);
        res.status(201).json(project);
    }catch(error){
        res.status(400).json({message:"Server Error"});
    }
}