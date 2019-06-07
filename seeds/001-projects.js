
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project1', completed: 0, description: 'Project 1 description'},
        {name: 'project2', completed: 0, description: 'Project 2 description'},
        {name: 'project3', completed: 0, description: 'Project 3 description'},
        {name: 'project4', completed: 0, description: 'Project 4 description'},
        {name: 'project5', completed: 1, description: 'Project 5 description'},
        {name: 'project6', completed: 1, description: 'Project 6 description'}
      ]);
    });
};