import { createSlice } from "@reduxjs/toolkit";

export const globalReducer = createSlice({
  name: "global",
  initialState: {
    value: 0,
    searchFilterModal: false,
    isRoommate: true,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    toggleSearchFilter: (state) => {
      state.searchFilterModal = !state.searchFilterModal;
    },
    toggleDefaultRoommate: (state, action) => {
      state.isRoommate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  toggleSearchFilter,
  toggleDefaultRoommate,
} = globalReducer.actions;

export default globalReducer.reducer;
