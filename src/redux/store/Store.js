import { configureStore } from "@reduxjs/toolkit";
import { BlogApi } from "../features/blog/blogApi";
import AuthApi from "../features/auth/authapi";
import authReducer from "../features/auth/authSlice";
import commentApi from "../features/comment/commentApi";

export const store = configureStore({
  reducer: {
    [BlogApi.reducerPath]: BlogApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [commentApi.reducerPath]: AuthApi.reducer,
    auth: authReducer, // The authReducer is added correctly here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BlogApi.middleware, AuthApi.middleware, commentApi.middleware),
  // The below line explicitly ensures Redux DevTools is enabled
  devTools: process.env.NODE_ENV !== "production", // Enables DevTools only in development mode
});

