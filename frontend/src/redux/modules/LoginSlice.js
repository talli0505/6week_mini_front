import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

export const __postLogin = createAsyncThunk(
  "posts/postPosts",
  async (payload, thunkAPI) => {
    console.log(payload);
    // try {
    //   const { data } = await axios.post(
    //     "http://localhost:3000/users/login",
    //     payload
    //   );
    //   console.log(data);
    //   return thunkAPI.fulfillWithValue(data.data);
    // } catch (error) {
    //   console.log(error);
    //   return thunkAPI.rejectWithValue(error);
    // }
  }
);

const logInSlice = createSlice({
  name: "logIn",
  initialState,
  reducers: {},
  extraReducers: {
    // [__getPosts.fulfilled]: (state, action) => {
    //   //   state.isLoading = true;
    //   //   state.postsState = action.payload;
    // },
  },
});

export default logInSlice.reducer;
