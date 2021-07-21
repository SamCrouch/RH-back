
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('housewives').del()
    .then(function () {
      return knex('housewives').insert([
        {name: 'Bethenny Frankel'},
        {name: 'Teresa Giudice'},
        {name: 'NeNe Leakes'}
      ]);
    });
};
