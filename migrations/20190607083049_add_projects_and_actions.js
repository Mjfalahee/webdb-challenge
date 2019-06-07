
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();

        tbl
            .string('name', 255)
            .notNullable()
            .unique();

        tbl
            .string('description', 500)
            .notNullable();

        tbl
            .integer('completed')
            .notNullable();
    })
    //projects needs to be created first
    .createTable('actions', tbl => {
        tbl.increments();

        //foreign key to projects
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

        tbl
            .string('description', 500)
            .notNullable();
        
        tbl
            .string('notes', 500)
            .notNullable();

        tbl
            .integer('completed')
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    //remove tables with foreign keys before the referenced table
  return knex.schema
    .dropTableIfExists('actions')
    .dropTableIfExists('projects');
};
