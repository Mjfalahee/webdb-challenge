const express = require('express');
const router = express.Router();

const db = require('../models/apiModel');


//post for adding projects
router.post('/', async (req, res) => {
    try {
        const project = await db.addProject(req.body);
        res.status(201).json(project);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error while trying to add project to database.'
        });
    }
});


//get for retrieving project by its id that returns an object with the projects.id, projects.name, projects.description, projects.completed, and the actions as an array
router.get('/:id', async (req, res) => {
    try {
        const project = await db.getProjectById(req.params.id);
        res.status(200).json(project);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error grabbing the project by specific id.'
        });
    }
});

//get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await db.getProjects();
        res.status(200).json(projects);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error retrieving the projects from the database.'
        });
    }
});

//delete project == tested and works
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await db.removeProject(req.params.id);
        res.status(200).json(deleted);
    }
    catch (error) {
        res.status(500).json({
            message: `Error deleting project with id: ${req.params.id}`
        });
    }
});


//update project == tested and works

router.put('/:id', async (req, res) => {
    try {
        const updated = await db.updateProject(req.params.id, req.body);
        res.status(200).json(updated);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error while updating the project.'
        });
    }
});



module.exports = router;