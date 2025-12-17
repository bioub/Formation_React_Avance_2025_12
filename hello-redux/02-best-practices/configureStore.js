import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer.js";

export function configureStore() {
  // Configuration logic for the store goes here
  const store = createStore(reducer);

  // TODO add middlewares, enhancers, etc.

  return store;
}