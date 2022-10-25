import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const __postLogin = createAsyncThunk(
  "posts/postLogin",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/users/login",
        payload,
        {
          headers: {
            "Content-Type": `application/json`, // application/json 타입 선언
          },
        }
      );
      // 토큰 발급
      const { token } = await data;

      //토큰 로컬 스토리지에 저장
      const localSet = window.localStorage;
      localSet.setItem("token", token);

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [__postLogin.fulfilled]: (state, action) => {
      alert(`${action.payload.userNickname}님 환영합니다`);
      state.userNickname = action.payload.userNickname;
    },
    [__postLogin.rejected]: (state, action) => {
      alert(action.payload);
    },
  },
});

export default loginSlice.reducer;
