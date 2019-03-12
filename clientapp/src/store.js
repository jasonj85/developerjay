import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

// only run redux dev tools when using dev environment
const devTools =
  process.env.NODE_ENV === "development"
    // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : null;

// set redux store
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    devTools
  )
);

export default store;
