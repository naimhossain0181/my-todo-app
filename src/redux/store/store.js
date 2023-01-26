import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../state/todo/TodoSlice";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export default store;
