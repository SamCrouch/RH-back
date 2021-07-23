
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('housewives').del()
    .then(function () {
      return knex('housewives').insert([
        {name: 'Bethenny Frankel'},
        {name: 'Teresa Giudice'},
        {name: 'NeNe Leakes'},
        {name: 'Lisa Vanderpump'},
        {name: 'LuAnn de Lesseps'},
        {name: 'Vicki Gunvalson'},
        {name: 'Heather Dubrow'},
        {name: 'Shannon Beador'},
        {name: 'Ramona Singer'},
      ]);
    });
};
