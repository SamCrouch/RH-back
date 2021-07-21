
exports.up = function(knex) {
  return knex.schema.createTable('quotes', table => {
      table.increments();
      table.string('quote').notNullable();
      table.integer('hw_id');
      table.string('img_url');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('quotes');
};
