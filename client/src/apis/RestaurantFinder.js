import axios from "axios";
import axiosRetry from "axios-retry";

const RestaurantFinder = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:7001/api/v1/restaurants"
      : "https://finder-resto.herokuapp.com/api/v1/restaurants",
  timeout: 5000,
});

axiosRetry(RestaurantFinder, { retries: 3 });

export default RestaurantFinder;
