import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SEARCH,
} from "./Types";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("http://localhost:3003/restaurant")
      .then((response) => {
        const restaurants = response.data;
        dispatch(fetchUsersSuccess(restaurants));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
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
export const fetchUsersSuccess = (restaurants) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: restaurants,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
