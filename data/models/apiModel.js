const db = require('../dbConfig');
const knex = require('knex');

module.exports = {
    addProject,
    addAction,
    getProjectById,
    getProjects,
    getActions,
    getActionById,
    removeProject,
    removeAction,
    updateProject,
    updateAction
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

//get all the projects
function getProjects() {
    return db('projects');
}

//get all the actions
function getActions() {
    return db('actions');
}

//get action by action id, and list all contexts for the action

//previous getActionById before contexts 

// function getActionById(id) {
//     return db('actions')
//         .where({ id })
// }

function getActionById(id) {
    return db
        .select(['actions.*', knex.raw("GROUP_CONCAT(contexts.name) as contexts")])
        .from('actions')
        .join('action_contexts', 'actions.id', 'action_contexts.action_id')
        .join('contexts', 'action_contexts.context_id', 'contexts.id')
        .where('actions.id', id)
}

//delete project

function removeProject(id) {
    return db('projects')
        .where({ id })
        .del();
}

//delete action

function removeAction(id) {
    return db('actions')
        .where({ id })
        .del();
}

//update project

function updateProject(id, changes) {
    return db('projects')
        .where({ id })
        .update(changes, '*');
}

//update action

function updateAction(id, changes) {
    return db('actions')
        .where({ id })
        .update(changes, '*');
}