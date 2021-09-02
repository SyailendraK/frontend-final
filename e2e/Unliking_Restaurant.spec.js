const assert = require('assert');

Feature('Unliking Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking one restaurant', async (I) => {
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

  I.amOnPage('/');

  I.seeElement('.post-item__title a');

  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#posts');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
