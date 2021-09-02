import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantsSource {
  static async posts() {
    const response = await fetch(API_ENDPOINT.POSTS);
    return response.json();
  }

  static async headline(responseJson) {
    let bestRating = 0;
    responseJson.restaurants.forEach((restaurant) => {
      bestRating = restaurant.rating > bestRating ? restaurant.rating : bestRating;
    });
    return responseJson.restaurants.filter((restaurant) => restaurant.rating === bestRating)[0];
  }

  static _bestRating(previous, current) {
    return previous.rating > current.rating ? previous.rating : current.rating;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReviewRestaurant(review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify(review),
    });
    return response.json();
  }
}
export default RestaurantsSource;
