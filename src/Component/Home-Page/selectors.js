import { createSelector } from "reselect";

export const restSelector = (state) => state.restaurant.restaurants;
const rest = (state) => state.restaurant.restaurants;
export const restaurantSelector = createSelector(
  rest,
  (state) => state.restaurant.search,
  (rest, search) => {
    return rest.map((val) => {
      if (rest == search) {
        return val;
      } else if (val.rname.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    });
    // return rest.filter((val) => {
    //   if (search == "") {
    //     return val;
    //   } else if (val.rname.toLowerCase().includes(search.toLowerCase())) {
    //     return val;
    //   }
    // });
  }
);
