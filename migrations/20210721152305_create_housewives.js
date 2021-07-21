
exports.up = function(knex) {
  return knex.schema.createTable('housewives', table => {
    table.increments('id')
    table.string('name').notNullable()
    table.string('img_url')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('housewives')
};
