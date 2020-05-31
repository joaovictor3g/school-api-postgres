
exports.up = function(knex) {
    return knex.schema.createTable('new_studant', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.decimal('age').notNullable();
        table.string('phone').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('new_studant');
};
