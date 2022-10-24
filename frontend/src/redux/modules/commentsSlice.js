import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//initialState
const initialState = {
  comments: [],
  isLoading: false,
  error: null,
  isEditMode: false,
};

export const __getComments = createAsyncThunk(
  "getComments", //전체댓글조회
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/comments/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
    }
  }
);

export const __getComment = createAsyncThunk(
  "getComment", //댓글수정할때 가져오는 원래 댓글
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get();
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// {data} 구조분해할당 fulfillwithvalue(data) 데이터값만 보여줌!
// data , fulfillwithvalue(data.data) data.data 안해주면 config등 쓸데없는거 가져옴
export const __addComment = createAsyncThunk(
  "addComment", //댓글 추가하기
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/comments/${payload}`,
        payload
      );
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __delComment = createAsyncThunk(
  "delComment", //댓글삭제
  async (payload, thunkAPI) => {
    try {
      await axios.delete();
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
    }
  }
);

export const __editComment = createAsyncThunk(
  "editComment", //댓글수정
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.patch();
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearComment: (state) => {
      state.comments.data = "";
    },
    editMode: (state, action) => {
      state.isEditMode = action.payload;
    },
  },
  extraReducers: {
    //comment 전체 조회
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.data = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.comments.error = action.payload;
    },
    //comment 추가
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.data.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //comment 삭제
    [__delComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__delComment.fulfilled]: (state, action) => {
      state.comments.data = state.comments.data.filter((item) => {
        return item.id !== action.payload;
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
      const newComments = state.comments.data.map((comment) => {
        if (comment.id === action.payload.id) {
          return action.payload;
        } else {
          return comment;
        }
      });
      state.comments.data = newComments;
      state.isLoading = false;
    },
    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

//export reducer
export const { clearComment, editMode } = commentsSlice.actions;
export default commentsSlice.reducer;
