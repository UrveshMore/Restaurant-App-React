import { combineReducers } from "redux";
import { cartreducer } from "./cartReducers/reducer";

import restReducer from "./restaurant/Reducer";

const mainReduser = combineReducers({
  cart: cartreducer,
  restaurant: restReducer,
});
export default mainReduser;
