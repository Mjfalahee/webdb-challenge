const express = require('express');
const router = express.Router();

const db = require('../models/apiModel');

//get all actions

router.get('/', async (req, res) => {
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
router.get('/:id', async (req, res) => {
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


//post for adding actions

router.post('/', async (req, res) => {
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

 
module.exports = router;