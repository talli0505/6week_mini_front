// src/redux/modules/config/configStore.js
import posts from "../modules/postsSlice";
import { configureStore } from "@reduxjs/toolkit";

/**
 * import 해온 것은 slice.reducer 입니다.
 */

const store = configureStore({
  reducer: { posts: posts },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
