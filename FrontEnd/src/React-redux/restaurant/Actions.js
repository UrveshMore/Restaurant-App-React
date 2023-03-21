import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SEARCH,
} from "./Types";

import axios from "axios";
// export const fetchRest = () => {
//   return (dispatch) => {
//     dispatch(fetchRestRequest());
//     axios
//       .get("http://localhost:3003/restaurant")
//       .then((response) => {
//         const restaurants = response.data;
//         dispatch(fetchRestSuccess(restaurants));
//       })
//       .catch((error) => {
//         dispatch(fetchRestFailure(error.message));
//       });
//   };
// };

export const fetchRest = () => {
  return (dispatch) => {
    dispatch(fetchRestRequest());
    axios
      .post("http://localhost:3001/restaurantList/restaurants", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((response) => {
        const restaurants = response.data;
        dispatch(fetchRestSuccess(restaurants));
      })
      .catch((error) => {
        dispatch(fetchRestFailure(error.message));
      });
  };
};

export const fetchRestRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const searchRest = (search) => {
  return {
    type: SEARCH,
    payload: search,
  };
};
export const fetchRestSuccess = (restaurants) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: restaurants,
  };
};

export const fetchRestFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
