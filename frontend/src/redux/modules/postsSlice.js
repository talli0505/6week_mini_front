import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: {
    data: [],
  },
  isLoading: false,
  error: null,
  isEditMode: false,
};

const url = "http://localhost:4000";

export const __getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(url + "/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPosts = createAsyncThunk(
  "posts/postPosts",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(url + "/posts", payload, {
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`,
        },
      });

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete(url + "/posts", payload, {
        headers: {
          "Content-Type": `application/json`,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __patchPosts = createAsyncThunk(
  "posts/patcgPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(url + "/posts", payload, {
        headers: {
          "Content-Type": `application/json`,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
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
      state.data = action.payload;
    },
    [__postPosts.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    },
    [__deletePosts.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    },
    [__patchPosts.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    },
  },
});

export default postsSlice.reducer;
