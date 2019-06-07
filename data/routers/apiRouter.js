const express = require('express');
const router = express.Router();

//add model
const db = require('../models/apiModel');



//middleware if any


//post for adding projects
router.post('/projects', async (req, res) => {
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

//post for adding actions

router.post('/actions', async (req, res) => {
    try {
        const action = await db.addAction(req.body);
        res.status(201).json(action);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error while trying to add action to database.'
        })
    }
})

//get for retrieving project by its id that returns an object with the projects.id, projects.name, projects.description, projects.completed, and the actions as an array
router.get('/projects/:id', async (req, res) => {
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
router.get('/projects', async (req, res) => {
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


//get all actions

router.get('/actions', async (req, res) => {
    try {
        const actions = await db.getActions();
        res.status(200).json(actions);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error retrieving the actions from the database.'
        });
    }
});


//get action by id
router.get('/actions/:id', async (req, res) => {
    try {
        const action = await db.getActionById(req.params.id);
        res.status(200).json(action);
    }
    catch (error) {
        res.status(500).json({
            message: `Failure to retrieve action by id ${req.params.id}`
        })
    }
})
module.exports = router;