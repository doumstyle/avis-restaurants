export interface RestaurantJSON {
  restaurantName: string;
  address: string;
  lat: number;
  lng: number;
  ratings: {stars: number, comment: string}[];
}

export class Restaurant {
  name: string;
  address: string;
  position: {lat: number, lng: number};
  ratings: {stars: number, comment: string}[];
  restaurantId: string = '';
  gpRating: number = -1;

  constructor(name: string, address: string, position: {lat: number, lng: number}, ratings: {stars: number, comment: string}[]) {
    this.name = name;
    this.address = address;
    this.position = position;
    this.ratings = ratings;
  }

  getAvgRating() {
    if(this.gpRating != -1) {
      return this.gpRating;
    }
    let average: number = 0;
    for (let rating of this.ratings) {
      average += rating.stars;
    }
    return average == 0 ? 1 : average / this.ratings.length;
  }
}