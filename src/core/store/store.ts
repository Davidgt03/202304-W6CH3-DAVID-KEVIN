import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../../core/redux/reducer";

export const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
