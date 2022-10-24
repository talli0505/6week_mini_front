// src/redux/modules/config/configStore.js
import posts from "../modules/postsSlice";
import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signUpSlice";
import login from "../modules/LoginSlice";
import comments from "../modules/commentsSlice";
/**
 * import 해온 것은 slice.reducer 입니다.
 */

const store = configureStore({
  reducer: { posts: posts, signup: signup, login: login, comments: comments },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
