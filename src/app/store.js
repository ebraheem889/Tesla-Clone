import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/carSlice/index";
import sidebarReducer from "../features/sidebarSlice/index";
import homeSlices from "../features/homeSlice/index";

export const store = configureStore({
  reducer: {
    carSlice: carReducer,
    sidebarSlice : sidebarReducer,
    homeslice:homeSlices,
  },
});


