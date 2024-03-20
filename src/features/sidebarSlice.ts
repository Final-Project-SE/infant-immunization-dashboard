import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displaySidebar: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    hideSidebar: (state) => {
      state.displaySidebar = false;
    },
    showSidebar: (state) => {
      state.displaySidebar = true;
    },
  },
});

export default sidebarSlice.reducer;
export const { hideSidebar, showSidebar } = sidebarSlice.actions;

export const displaySidebarSelector = (state: any) =>
  state.sidebar.displaySidebar;
