import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createPostsTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">restoran favorit <i class="fas fa-heart" aria-hidden="true"></i></h2>
        <hr/>
        <div class="posts" id="posts">
        
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#posts');
    console.log(restaurants);
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createPostsTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML += "<h4 class='restaurant-item__not__found center'>Tidak ada restaurant untuk ditampilkan<h4>";
    }
  },
};

export default Favorite;
