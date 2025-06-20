import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
