import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [
    {
      content: "123",
      createdAt: "2022-10-24T07:58:21.562Z",
      nickname: "123123",
      postId: 27,
      title: "123",
      updatedAt: "2022-10-24T07:58:21.562Z",
      userId: 20,
    },
  ],
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

//게시글 업로드
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
      const { title, content, nickname } = data.data;
      return thunkAPI.fulfillWithValue({ title, content, nickname });
    } catch (error) {
      console.log(error);
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

      const { title, content, nickname } = data.data;
      return thunkAPI.fulfillWithValue({ title, content, nickname });
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
  reducers: {
    // "posts/postPosts": {},
  },
  extraReducers: {
    // 게시글 Get 액션 페이로드
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    // 페이지별 상세 불러오기
    [__getPostById.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getPostById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.data = action.payload;
    },
    //게시글 Post 액션 페이로드
    [__postPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
      console.log(payload.title);
      // state.data = {
      //   title: payload.title,
      //   comment: payload.comment,
      //   nickname: payload.nickname,
      // };
      state.data.title = payload.title;
      state.data.comment = payload.comment;
      state.nickname = payload.nickname;
    },
    [__postPosts.rejected]: (state, action) => {
      state.isLoading = true;
      console.log(action.error);
      //게시글 삭제 페이로드
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
