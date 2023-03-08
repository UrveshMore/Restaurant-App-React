import { createSelector } from "reselect";

export const restSelector = (state) => state.restaurant.restaurants;

export const restaurant = createSelector(
  (state) => state.restaurant.restaurants,
  (state) => state.restaurant.search,
  (rest, search) => {
    return rest.map((e) => {
      return e.id;
    });
  }
);
