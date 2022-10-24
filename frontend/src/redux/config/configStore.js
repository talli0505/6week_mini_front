// src/redux/modules/config/configStore.js
import posts from "../modules/postsSlice";
import { configureStore } from "@reduxjs/toolkit";
import signUp from "../modules/signUpSlice";
import comments from "../modules/commentsSlice";
/**
 * import 해온 것은 slice.reducer 입니다.
 */

const store = configureStore({
  reducer: { posts: posts, signUp: signUp, comments: comments },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
