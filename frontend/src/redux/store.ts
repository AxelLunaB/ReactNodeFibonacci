import { configureStore } from "@reduxjs/toolkit";
import { name, reducer } from "../components/slice";

const store = configureStore({
  reducer: {
    [name]: reducer,
  },
});

export default store;
