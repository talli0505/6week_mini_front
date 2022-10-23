import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [{ email: "jungem21@naver.com", password: 213123132 }];

export const __postSignup = createAsyncThunk(
  "posts/postSignup",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      console.log(payload);
      const data = await axios.post("http://localhost:4000/users", payload, {
        // json을 json타입의 text로 변환
        headers: {
          "Content-Type": `application/json`, // application/json 타입 선언
        },
      });
      console.log("user ingo body", data);
      //   return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      // return thunkAPI.rejectWithValue(error);
    }
  }
);

const signUpSlice = createSlice({
  name: "singUp",
  initialState,
  reducers: {},
  extraReducers: {
    // [__getPosts.fulfilled]: (state, action) => {
    //   //   state.isLoading = true;
    //   //   state.postsState = action.payload;
    // },
  },
});

export default signUpSlice.reducer;
