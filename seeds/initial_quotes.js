
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      return knex('quotes').insert([
        {quote: "Go to sleep! Go to sleep!", hw_id: 1, img_url: "https://pbs.twimg.com/ext_tw_video_thumb/1089924668667191299/pu/img/REtWii2RRXSR5h6W.jpg" },
        {quote: "I am paying attention! Obviously there has to be something else. It's just not name change and arrested. There has to be something else. Are you stripping? You were stripping. Prostitution whore! You were f--king engaged 19 times! You f--king stupid bitch!", hw_id: 2, img_url: "https://www.bravotv.com/sites/bravo/files/styles/scale--1200/public/2019-07/teresa-table-flip.jpg?itok=HE85VKdU"},
        {quote: "So nasty and so rude", hw_id: 3, img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/NeNe_Leakes_at_PaleyFest_2013.jpg/1024px-NeNe_Leakes_at_PaleyFest_2013.jpg"},
        {quote: "Get off my jock", hw_id: 1, img_url: "https://www.bravotv.com/sites/bravo/files/styles/media-gallery-computer/public/field_media_items/2015/04/the-real-housewives-of-new-york-city-season-7-taglines-01.jpg?itok=DlEkUH12"},
        {quote: "She's cuckoo for cocoa puffs", hw_id: 1, img_url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Bethenny_Frankel_2009.png"},
        {quote: "Life isn’t all diamonds and rosé, but it should be", hw_id: 4, img_url: "https://www.bravotv.com/sites/bravo/files/styles/media-gallery-computer/public/legacy/images/photo/2014/11/real-housewives-of-beverly-hills-season-5-taglines-lisa.jpg?itok=FPTAZgZg" },
        {quote: "One should know, never count out the Countess", hw_id: 5, img_url: "https://www.bravotv.com/sites/bravo/files/styles/media-gallery-computer/public/field_media_items/2015/04/the-real-housewives-of-new-york-city-season-7-taglines-05.jpg?itok=ybH3nQZw"},
        {quote: "I'm the OG of the OC, everyone else is just a copy", hw_id: 6, img_url: "https://www.bravotv.com/sites/bravo/files/styles/media-gallery-computer/public/real-housewives-of-orange-county-season-10-04.jpg?itok=xzN143tM" },
        {quote: "I may be married to a plastic surgeon, but I'm 98 percent real", hw_id: 7, img_url: "https://www.bravotv.com/sites/bravo/files/styles/media-gallery-computer/public/real-housewives-of-orange-county-season-10-05.jpg?itok=_gcA_sDT"},
        {quote: "When life gives you lemons, but nine in a bowl!", hw_id: 8, img_url: "https://www.bravotv.com/sites/bravo/files/styles/media-gallery-computer/public/real-housewives-of-orange-county-season-10-03.jpg?itok=iTzDd8Qm"},
        {quote: "Take a Xanax! Calm Down!", hw_id: 9, img_url: "https://www.bravotv.com/sites/bravo/files/styles/media-gallery-computer/public/field_media_items/2015/08/rha-best-quotes-ever-21.jpg?itok=7q_QHTOO"}
      ]);
    });
};
