import { createSlice } from "@reduxjs/toolkit";
export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    editItem: (state, action) => {
      state.value.splice(action.payload["index"], 1, action.payload["task"]);
    },
  },
});
export default TodoSlice.reducer;
export const { addItem, removeItem, editItem } = TodoSlice.actions;
