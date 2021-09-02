const assert = require('assert');

Feature('Review Restaurant');

Before((I) => {
  I.amOnPage('/');
});

Scenario('review a restaurant', async (I) => {
  const name = 'mamang';
  const review = 'Bagoes';

  I.seeElement('.post-item__title a');

  const firstFilm = locate('.post-item__title a').first();
  I.click(firstFilm);

  I.seeElement('#input__name');
  I.fillField({ id: 'input__name' }, name);
  I.seeElement('#input__review');
  I.fillField({ id: 'input__review' }, review);

  I.click('#input__submit');
  I.wait(2);
  const postedName = locate('.review__name').last();
  const postedNameText = await I.grabTextFrom(postedName);
  const postedReview = locate('.review__content').last();
  const postedReviewText = await I.grabTextFrom(postedReview);

  assert.strictEqual(name, postedNameText);
  assert.strictEqual(review, postedReviewText);
});
