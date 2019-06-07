
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
      {project_id: 1, description: 'action 1 description', notes: 'action 1 notes', completed: 0},
      {project_id: 1, description: 'action 2 description', notes: 'action 2 notes', completed: 1},
      {project_id: 2, description: 'action 3 description', notes: 'action 3 notes', completed: 0},
      {project_id: 2, description: 'action 4 description', notes: 'action 4 notes', completed: 1},
      {project_id: 3, description: 'action 5 description', notes: 'action 5 notes', completed: 0},
      {project_id: 3, description: 'action 6 description', notes: 'action 6 notes', completed: 1},
      {project_id: 4, description: 'action 7 description', notes: 'action 7 notes', completed: 0},
      {project_id: 4, description: 'action 8 description', notes: 'action 8 notes', completed: 1},
      {project_id: 5, description: 'action 9 description', notes: 'action 9 notes', completed: 0},
      {project_id: 5, description: 'action 10 description', notes: 'action 10 notes', completed: 1},
      {project_id: 6, description: 'action 11 description', notes: 'action 11 notes', completed: 0},
      {project_id: 6, description: 'action 12 description', notes: 'action 12 notes', completed: 1}
      ]);
    });
};
