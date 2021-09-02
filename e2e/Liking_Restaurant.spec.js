const assert = require('assert');

Feature('Liking Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', (I) => {
  I.seeElement('#posts');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async (I) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');

  const firstFilm = locate('.post-item__title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedFilmTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});
