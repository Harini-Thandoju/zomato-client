import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// redux middlewares
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;



//basically,we cant see redux store in chrome so we use this two packages logger nd thunk  we import thunk but we should
//not import logger dircectly becoz it can reveal all the hidden applications to the hacker we import it still but in diff way using middlewares
