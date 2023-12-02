import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [], // Initialize value as an empty array
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState, // Use initialState as the initial state
  reducers: {
    addTocart: (state, action) => {
      const courseId = action.payload;
      if (!state.value.includes(courseId)) {
        state.value.push(courseId);
      }
    },
    deleteFromcart: (state, action) => {
      const courseId = action.payload;
      const index = state.value.indexOf(courseId);
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const { addTocart, deleteFromcart } = cartSlice.actions;
export default cartSlice.reducer;
