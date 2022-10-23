import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const __postPosts = createAsyncThunk(
  "posts/postPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:3000/posts", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);

    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export default postsSlice.reducer;

// export const __post = createAsyncThunk("", async (payload, thunkAPI) => {
//   try {
//     const data = await axios.post("");
//   } catch (error) {}
// });

export const __deletePosts = createAsyncThunk(
  "posts/postPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete("http://localhost:3000/posts");
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// export const __delete = createAsyncThunk("", async (payload, thunkAPI) => {
//   try {
//     const data = await axios.delete("");
//   } catch (error) {}
// });

// export const __patch = createAsyncThunk("", async (payload, thunkAPI) => {
//   try {
//     const data = await axios.patch("");
//   } catch (error) {}
// });

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.postsState = action.payload;
    },
  },
});

export default postsSlice.reducer;
