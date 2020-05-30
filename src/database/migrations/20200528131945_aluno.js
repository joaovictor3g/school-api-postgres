
exports.up = function(knex) {
    return knex.schema.createTable('new_studant', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.numeric('age').notNullable();
        table.string('telefone').notNullable();
        table.integer('idCourse').unsigned()
        table.foreign('idCourse').references('Curso.id');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('new_studant');
};
