import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
};

const url = process.env.REACT_APP_BACK_BASE_URL;

export const __postSignup = createAsyncThunk(
  "posts/postSignup",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${url}/users`, payload, {
        headers: {
          "Content-Type": `application/json`,
        },
      });
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
