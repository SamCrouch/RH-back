
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      return knex('quotes').insert([
        {quote: "Go to sleep! Go to sleep!", hw_id: 1, img_url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Bethenny_Frankel_2009.png" },
        {quote: "Prostitution whore!", hw_id: 2, img_url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Teresa_Giudice_at_New_York_Fashion_Week_2016.jpg"},
        {quote: "So nasty and so rude", hw_id: 3, img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/NeNe_Leakes_at_PaleyFest_2013.jpg/1024px-NeNe_Leakes_at_PaleyFest_2013.jpg"},
        {quote: "Get off my jock", hw_id: 1, img_url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Bethenny_Frankel_2009.png"}
      ]);
    });
};
