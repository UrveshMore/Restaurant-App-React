import { combineReducers } from "redux";

import { cartreducer } from "./reducer";

const mainReduser = combineReducers({
  cartreducer,
});
export default mainReduser;
