
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      return knex('quotes').insert([
        {quote: "Go to sleep got to sleep!", hw_id: 1},
        {quote: "Prostitution whore!", hw_id: 2},
        {quote: "So nasty and so rude", hw_id: 3}
      ]);
    });
};
