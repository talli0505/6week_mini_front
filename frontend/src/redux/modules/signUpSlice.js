import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  isLoading: false,
  error: null,
};

export const __postSignup = createAsyncThunk(
  "posts/postSignup",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/users",
        payload,
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const signupSlice = createSlice({
  name: "singup",
  initialState,
  reducers: {},
  extraReducers: {
    [__postSignup.fulfilled]: (state, action) => {
      alert(`${action.payload.data.nickname}님 환영합니다`);
    },
    [__postSignup.rejected]: (state, action) => {
      state.isLoading = true;
      alert(action.error);
    },
  },
});

export default signupSlice.reducer;
