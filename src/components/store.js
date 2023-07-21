import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./redux/counter";
import counterReducer from "../slices/counter";

const store = configureStore({
  reducer: {
    counter: counterReducer, // global state.counter
  },
});

export default store;
