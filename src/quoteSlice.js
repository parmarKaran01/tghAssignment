import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quotes",
  initialState: [],
  reducers: {
    addQuote: (state, action) => {
      state.push(action.payload);
    },
    removeQuote: (state, action) => {
      const newArray = state.filter((item) => item._id !== action.payload);
      state = newArray;
    },
  },
});

export const { addQuote, removeQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
