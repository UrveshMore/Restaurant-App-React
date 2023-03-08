import { createStore, applyMiddleware } from "redux";
import mainReduser from "./React-redux/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
const store = createStore(
  mainReduser,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
