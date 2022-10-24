import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: { "Content-Type": `application/json` },
});

export const __postLogin = createAsyncThunk(
  "posts/postLogin",
  async (payload, thunkAPI) => {
    // console.log(payload);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/users/login",
        payload,
        {
          headers: {
            "Content-Type": `application/json`, // application/json 타입 선언
            // Authorization: token,
          },
        }
      );

      const { token } = await data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      console.log("axios_default : ", axios.defaults);

      const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

      // onLoginSuccess = (response) => {
      //   const { accessToken } = response.data;

      //   // accessToken 설정
      //   axios.defaults.headers.common[
      //     "Authorization"
      //   ] = `Bearer ${accessToken}`;

      //   // accessToken 만료하기 1분 전에 로그인 연장
      //   setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
      // };

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// let token = localStorage.getItem("wtw-token") || "";

// fetch("http://localhost:8000/likes/", {
//   headers: {
//     Authorization: token,
//   },
// })
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response.data);
//   });

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    // [__getPosts.fulfilled]: (state, action) => {
    //   //   state.isLoading = true;
    //   //   state.postsState = action.payload;
    // },
  },
});

export default loginSlice.reducer;
