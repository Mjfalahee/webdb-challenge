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

//get actions by project id
function getActionsbyProjectId(id) {
    return db('actions')
        .select(['actions.id', 'actions.description', 'actions.notes', 'actions.completed'])
        .where('actions.project_id', id);
}

//get project by id and return a big ol' object
async function getProjectById(id) {
    let project = await db('projects')
            .where({ id })
            .first();
    let actions = await getActionsbyProjectId(id)
    return {
        ...project,
        actions: actions.map(action => {
            return action;
        })
    }
        
};



function getProjects() {
    return db('projects');
}

function getActions() {
    return db('actions');
}