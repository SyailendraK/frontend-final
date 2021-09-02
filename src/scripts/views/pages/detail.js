import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import { createDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import SubmitReviewInitiator from '../../utils/submit-review-initiator';

const Detail = {
  async render() {
    return `
    <section>
    <div id="likeButtonContainer"></div>
    <article class="detail__restaurant" id="detail__restaurant">
    
    </article>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail__restaurant');
    restaurantContainer.innerHTML = createDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
      },
    });

    SubmitReviewInitiator.init(document.querySelector('#input__submit'), url.id);
  },
};

export default Detail;
