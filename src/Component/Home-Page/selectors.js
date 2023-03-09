import { createSelector } from "reselect";

export const restSelector = (state) => state.restaurant.restaurants;

export const restaurantSelector = createSelector(
  (state) => state.restaurant.restaurants,
  (state) => state.restaurant.search,
  (rest, search) => {
    return rest.filter((val) => {
      if (search == "") {
        return val;
      } else if (val.rname.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    });
  }
);
console.log(restaurantSelector);
