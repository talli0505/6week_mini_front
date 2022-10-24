import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const url = "http://localhost:4000";

export const __getPosts = createAsyncThunk(
  "posts/getPosts", //메인페이지 전체 게시글 가져오기
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(url + "/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPostById = createAsyncThunk(
  "posts/getPostById", //상세페이지 특정 id 게시글 가져오기
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/posts/${payload}`
      );
      //console.log(data.post);
      return thunkAPI.fulfillWithValue(data.post);
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
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __post = createAsyncThunk("", async (payload, thunkAPI) => {
//   try {
//     const data = await axios.post("");
//   } catch (error) {}
// });

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
      state.isLoading = false;
      //console.log(action.payload);
      state.data = action.payload;
    },
    [__getPostById.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      //console.log(state.data);
    },
    [__getPostById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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
