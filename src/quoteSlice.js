import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quotes",
  initialState: [],
  reducers: {
    addQuote: (state, action) => {
      const ele = state.find((item) => item._id === action.payload._id);
      if (!ele) {
        state.push(action.payload);
      }
      return state;
    },
    removeQuote: (state, action) => {
      const newArray = state.filter((item) => item._id !== action.payload);
      state = newArray;
      return state;
    },
    initializeQuotes: (state, action) => {
      const array = [...action.payload];
      state = array;
      return state;
    },
  },
});

export const { addQuote, removeQuote, initializeQuotes } = quoteSlice.actions;

export default quoteSlice.reducer;
