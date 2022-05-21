import { createStore } from "redux";

const reducerFn = (state = { name: "Lasha" }, action) => {
  return state;
};

const store = createStore(reducerFn);
export default store;
