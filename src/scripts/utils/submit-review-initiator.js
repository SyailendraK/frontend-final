import RestaurantsSource from '../data/restaurants-source';
import { createReviewTemplates } from '../views/templates/template-creator';

const SubmitReviewInitiator = {
  init(button, id) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const name = document.querySelector('#input__name').value;
      const review = document.querySelector('#input__review').value;
      this._refreshReview(event, this._submitReview(event, { id, name, review }));
    });
  },

  _submitReview(event, { id, name, review }) {
    event.stopPropagation();
    return RestaurantsSource.addReviewRestaurant({ id, name, review });
  },

  async _refreshReview(event, reviews) {
    event.stopPropagation();
    const reviewList = document.querySelector('#review__list');
    const dataReview = await reviews;
    reviewList.innerHTML = createReviewTemplates(dataReview.customerReviews);
  },
};

export default SubmitReviewInitiator;
