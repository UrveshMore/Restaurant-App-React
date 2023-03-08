import { combineReducers } from "redux";
import { cartreducer } from "./cartReducers/reducer";

import userReducer from "./restaurant/Reducer";

const mainReduser = combineReducers({
  cart: cartreducer,
  restaurant: userReducer,
});
export default mainReduser;
