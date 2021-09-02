import restaurantsSource from '../../data/restaurants-source';
import { createPostsTemplate, createHeadlineTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
    <div class="hero__inner" aria-label="banner utama web mam-mang">
      <h1 class="hero__title">dari mulut turun ke hati</h1>
    </div>
  </div>
    <section class="content">
    <article class="headline" id="headline">
      
    </article>
    <div class="latest">
      <h1 class="latest__label">Katalog Restoran</h1>
      <hr />
      <div class="posts" id="posts">
      
      </div>
    </div>
  </section>
    `;
  },

  async afterRender() {
    const restaurants = await restaurantsSource.posts();
    const bestRestaurant = await restaurantsSource.headline(restaurants);
    const headlineContainer = document.querySelector('#headline');
    headlineContainer.innerHTML += createHeadlineTemplate(bestRestaurant);
    const postsContainer = document.querySelector('#posts');
    restaurants.restaurants.forEach((restaurant) => {
      postsContainer.innerHTML += createPostsTemplate(restaurant);
    });
  },
};

export default Home;
