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

//게시글 업로드
export const __postPosts = createAsyncThunk(
  "posts/postPosts",
  async (payload, thunkAPI) => {
    console.log("안녕 난 body", payload);
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

//게시글 삭제
export const __deletePostsById = createAsyncThunk(
  "posts/deletePosts",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.delete(url + `/posts/${payload}`, {
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("delete response__ : ", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시글 수정
export const __putPostsById = createAsyncThunk(
  "posts/putPosts",
  async (payload, thunkAPI) => {
    const sendData = JSON.stringify({
      title: payload.title,
      content: payload.content,
    });
    const sendPostId = Number(payload.postId);

    console.log(sendData, sendPostId);
    const token = localStorage.getItem("token");
    try {
      const data = await axios.put(url + `/posts/${sendPostId}`, sendData, {
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("patch response__ : ", data);
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // console.log(error);
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
      return thunkAPI.fulfillWithValue(data.post);
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
    // 전체 게시글 get 액션
    [__getPosts.fulfilled]: (state, action) => {
      state.data.push(action.payload);
    },
    [__getPosts.rejected]: (state, action) => {
      alert(action.payload);
    },
    //게시글 post 액션
    [__postPosts.fulfilled]: (state, { payload }) => {
      state.data.push({
        title: payload.title,
        content: payload.content,
        nickname: payload.nickname,
      });
    },
    [__postPosts.rejected]: (state, action) => {
      alert(action.payload);
    },
    //게시글 delete 액션
    [__deletePostsById.fulfilled]: (state, action) => {},
    [__deletePostsById.rejected]: (state, action) => {
      alert(action.payload);
    },
    //게시글 patch 액션
    [__putPostsById.fulfilled]: (state, action) => {
      alert("성공");
    },
    [__putPostsById.rejected]: (state, action) => {
      alert(action.payload);
    },
    // id별 상세 불러오기 액션
    [__getPostById.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__getPostById.rejected]: (state, action) => {
      alert(action.payload);
    },
  },
});

export default postsSlice.reducer;
