
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('housewives').del()
    .then(function () {
      return knex('housewives').insert([
        {name: 'Bethenny Frankel', img_url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Bethenny_Frankel_2009.png"},
        {name: 'Teresa Giudice', img_url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Teresa_Giudice_at_New_York_Fashion_Week_2016.jpg"},
        {name: 'NeNe Leakes', img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/NeNe_Leakes_at_PaleyFest_2013.jpg/1024px-NeNe_Leakes_at_PaleyFest_2013.jpg"}
      ]);
    });
};
