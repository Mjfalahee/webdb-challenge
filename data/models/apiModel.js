const db = require('../dbConfig');
const knex = require('knex');

module.exports = {
    addProject,
    addAction,
    getProjectById,
    getProjects,
    getActions
};

//add project to database
function addProject(project) {
    return db('projects')
        .insert(project);
};


//add action to database
function addAction(action) {
    return db('actions')
        .insert(action);
};

//get project by id and return a big ol' object
function getProjectById(id) {

};

function getProjects() {
    return db('projects');
}

function getActions() {
    return db('actions');
}