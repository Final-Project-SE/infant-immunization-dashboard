import { configureStore } from "@reduxjs/toolkit";

import sidebarSlice from "@/features/sidebarSlice";
import authReducer from "@/features/authSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
