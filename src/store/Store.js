import { createStore } from "redux";

const reducerFn = (state = { name: "Lasha" }, action) => {
  if (action.type == "INC") {
    return { name: state.name == "yle" };
  }
  return state;
};

const store = createStore(reducerFn);
export default store;
