import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [{ email: "jungem21@naver.com", password: 213123132 }];

// export const __getPosts = createAsyncThunk(
//   "posts/getPosts",
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await axios.get("http://localhost:3000/posts");
//       console.log(data);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const __postSignup = createAsyncThunk(
  "posts/postSignup",
  async (payload, thunkAPI) => {
    console.log(payload);
    // try {
    //   console.log(payload);
    //   //   const data = await axios.post("http://localhost:3000/signup", payload);
    //   //   console.log("user ingo body", data);
    //   console.log("hi");
    //   //   return thunkAPI.fulfillWithValue(data);
    // } catch (error) {
    //   console.log(error);
    //   return thunkAPI.rejectWithValue(error);
    // }
  }
);

// export const __deletePosts = createAsyncThunk(
//   "posts/postPosts",
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await axios.delete("http://localhost:3000/posts");
//       console.log(data);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const __delete = createAsyncThunk("", async (payload, thunkAPI) => {
//   try {
//     const data = await axios.delete("");
//   } catch (error) {}
// });

// export const __patch = createAsyncThunk("", async (payload, thunkAPI) => {
//   try {
//     const data = await axios.patch("");
//   } catch (error) {}
// });

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
