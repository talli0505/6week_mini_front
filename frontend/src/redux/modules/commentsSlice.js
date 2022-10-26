import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

//initialState
const initialState = {
  comments: {
    message: [],
  },
  isLoading: false,
  error: null,
};

const url = "http://localhost:4000";

// {data} 구조분해할당 fulfillwithvalue(data) 데이터값만 보여줌!
// data , fulfillwithvalue(data.data) data.data 안해주면 config등 쓸데없는거 가져옴
export const __getComments = createAsyncThunk(
  "getComments", //전체댓글 가져오기
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get(url + `/comments/${payload}`, {
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
    }
  }
);

export const __postComment = createAsyncThunk(
  "postComment", //댓글 추가
  async (payload, thunkAPI) => {
    console.log(payload);
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        url + `/comments/${payload.id}`,
        JSON.stringify({ comment: payload.comment }),
        {
          headers: {
            "Content-Type": `application/json`,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("postcomment", data);
      return thunkAPI.fulfillWithValue(data.createcomments.create);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __delComment = createAsyncThunk(
  "delComment", //댓글삭제
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(url + `/comments/${payload}`, {
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __editComment = createAsyncThunk(
  "editComment", //댓글수정
  async (payload, thunkAPI) => {
    console.log(payload);
    const token = localStorage.getItem("token");
    try {
      await axios.patch(
        url + `/comments/${payload.commentId}`,
        JSON.stringify({
          commentId: payload.commentId,
          comment: payload.comment,
        }),
        {
          headers: {
            "Content-Type": `application/json`,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    //comment 전체 조회
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
      console.log(action.payload);
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.comments.error = action.payload;
    },
    //comment 추가
    [__postComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.message = [action.payload, ...state.comments.message];
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //comment 삭제
    [__delComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__delComment.fulfilled]: (state, action) => {
      state.comments.message = state.comments.message.filter((item) => {
        console.log(current(item));
        console.log(action.payload);
        return item.commentId !== action.payload;
      });
      state.isLoading = false;
    },
    [__delComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.comments.error = action.payload;
    },
    //comment 수정
    [__editComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.message.map((comment) =>
        comment.commentId === action.payload.commentId
          ? { comment: action.payload.comment }
          : comment
      );
    },
    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

//export reducer
export default commentsSlice.reducer;
