import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" crossorigin="anonymous" alt="${restaurant.title}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.vote_average}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.title}</a></h3>
        <p>${restaurant.overview}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createHeadlineTemplate = (restaurant) => `<figure class="headline__figure">
<img
  src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}"
  alt="restoran ${restaurant.name}"
/>
</figure>
<div class="headline__content">
<h1 class="headline__title">saran restoran dari kami</h1>
<h2>${restaurant.name}</h2>
<p class="headline__description">
${restaurant.description}
</p>
<a class="headline__button" href="#/detail/${restaurant.id}">selengkapnya</a>
</div>`;

const createPostsTemplate = (restaurant) => `<article class="post-item">
<div class="relative">
  <img
    class="post-item__thumbnail lazyload"
    data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}"
    alt="restoran ${restaurant.name}"
  />
  <p class="post-item__rating">${
  restaurant.rating
}<i class="fas fa-star"></i></p>
</div>

<div class="post-item__content">
  <h1 class="post-item__title">
    <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
  </h1>
  <p class="post-item__location">
    Kota : 
    <span class="post-item__city"
      >${restaurant.city}</span
    >
  </p>
  <p class="post-item__description">
  ${restaurant.description.substring(0, 120)}...
  </p>
</div>
</article>`;

const createReviewTemplates = (reviews) => {
  let reviewTemplates = '';
  reviews.forEach((review) => {
    reviewTemplates += `<li><div class="review">
    <figure class="review__head">
      <img class="review__picture" src="/images/logo/user.png"/>
      <span class="review__name">${review.name}</span>
    </figure>
    <small class="review__date">${review.date}</small>
    <p class="review__content">${review.review}</p>
    </div></li>`;
  });
  return reviewTemplates;
};

const createDetailTemplate = (restaurant) => {
  const dataRestaurant = restaurant.restaurant;
  let detail = `
  <figure class="detail__figure">
    <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM + dataRestaurant.pictureId}" alt="Gambar dari restoran ${dataRestaurant.name}">
    <p>${dataRestaurant.rating}<i class="fas fa-star"></i></p>
  </figure>
  <div class="detail__content">
    <h1 class="detail__title">${dataRestaurant.name}</h1>
    <p class="detail__address">${`${dataRestaurant.address} ${dataRestaurant.city}`}</p>
    <div class="detail__categories">`;
  dataRestaurant.categories.forEach((category) => {
    detail += `<span  class="detail__categorie">#${category.name}</span>`;
  });
  detail += `</div>
    <div class="menu">
      <h2 class="menu__title">Menu</h2>
      <hr>
      <div class="menu__content">
        <div class="menu__foods">
          <h3>Makanan <i class="fas fa-utensils"></i></h3>
          <table>`;
  dataRestaurant.menus.foods.forEach((food) => {
    detail += `<tr><td>${food.name}</td></tr>`;
  });
  detail += `</table>
        </div>
        <div class="menu__drinks">
          <h3>Minuman <i class="fas fa-wine-glass-alt"></i></h3>
          <table>`;
  dataRestaurant.menus.drinks.forEach((drink) => {
    detail += `<tr><td>${drink.name}</td></tr>`;
  });
  detail += `</table>
        </div>
      </div>
    </div>
    <div class="reviews">
      <h2 class="review__title">Review</h2>
      <hr>
      <ul id="review__list">
        `;
  detail += createReviewTemplates(dataRestaurant.customerReviews);
  detail += `
      </ul>
      <div class="add__review">
        <form id="form__review">
          <div class="form__row">
            <label for="input__name">Nama</label>
            <input type="text" name="input__name" id="input__name" placeholder="Nama" required>
            <label for="input__review">Review</label>
            <textarea name="input__review" id="input__review" cols="30" rows="5" required></textarea>
            <button id="input__submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>`;
  return detail;
};

const createError = (message) => `<div class="callout-header">Kesalahan</div>
<span class="closebtn" onclick="this.parentElement.style.display='none';">×</span>
<div class="callout-container">
  <p>${message}</p>
</div>`;

export {
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createHeadlineTemplate,
  createPostsTemplate,
  createDetailTemplate,
  createError,
  createReviewTemplates,
};
