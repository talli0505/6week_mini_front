// src/redux/modules/config/configStore.js
import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */

const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV === "development",
});

export default store;
