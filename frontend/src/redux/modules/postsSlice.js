import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postsData: [],
  postData: [],
};

export const __getPosts = createAsyncThunk(
  "posts/getPosts", //메인에서 포스트 불러오기
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:4000/posts");
      //console.log(data);
      //console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPostById = createAsyncThunk(
  "posts/getPostById", //상세페이지 포스트 불러오기
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/posts/${payload}`
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.post);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.postsData = action.payload;
    },
    [__getPostById.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.postData = action.payload;
    },
  },
});

export default postsSlice.reducer;

// export const __post = createAsyncThunk("", async (payload, thunkAPI) => {
//   try {
//     const data = await axios.post("");
//   } catch (error) {}
// });

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
