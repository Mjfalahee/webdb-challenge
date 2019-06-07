
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {name: 'context 1'},
        {name: 'context 2'},
        {name: 'context 3'},
        {name: 'context 4'},
        {name: 'context 5'},
        {name: 'context 6'}
      ]);
    });
};
