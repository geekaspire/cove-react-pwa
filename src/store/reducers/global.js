import { createSlice } from "@reduxjs/toolkit";

export const globalReducer = createSlice({
  name: "global",
  initialState: {
    value: 0,
    searchFilterModal: false,
    isRoommate: true,
    isOpenSidebar: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    toggleSearchFilter: (state) => {
      state.searchFilterModal = !state.searchFilterModal;
    },
    toggleDefaultRoommate: (state, action) => {
      state.isRoommate = action.payload;
    },
    toggleSideBar: (state, action) => {
      state.isOpenSidebar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  toggleSearchFilter,
  toggleDefaultRoommate,
  toggleSideBar,
} = globalReducer.actions;

export default globalReducer.reducer;
