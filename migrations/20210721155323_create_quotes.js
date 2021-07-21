
exports.up = function(knex) {
  return knex.schema.createTable('quotes', table => {
      table.increments('id')
      table.string('quote').notNullable()
      table.integer('hw_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('quotes')
};
