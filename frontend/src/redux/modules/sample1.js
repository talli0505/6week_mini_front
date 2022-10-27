// // src/redux/modules/replySlice.js

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   replies: [],
//   isLoading: false,
//   error: null,
// };
// const url2 = process.env.REACT_APP_URL2;

// export const __getReplies = createAsyncThunk(
//   "replies/getReplies",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get(url2);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __postReplies = createAsyncThunk(
//   "replies/postReplies",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.post(url2, payload);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __deleteReplies = createAsyncThunk(
//   "replies/deleteReplies",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.delete(url2 / `${payload}`);
//       //payload를 return 해야 아래 reducer에서 값을 받아 쓸 수 있음.
//       return data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __patchReplies = createAsyncThunk(
//   "replies/patchReplies",
//   async (payload, thunkAPI) => {
//     console.log("패치 페이로드", payload);
//     console.log(payload.itemId);
//     try {
//       const data = await axios.patch(url2`${payload.itemId}`, {
//         reply: payload.editValue,
//       });

//       //payload를 return 해야 아래 reducer에서 값을 받아 쓸 수 있음.
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// const replySlice = createSlice({
//   name: "reply",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     //겟
//     [__getReplies.fulfilled]: (state, action) => {
//       state.isLoading = true;
//       state.replies = action.payload;
//     },
//     //포스트
//     [__postReplies.fulfilled]: (state, action) => {
//       state.isLoading = true;
//       state.replies.push(action.payload);
//     },
//     //딜리트
//     [__deleteReplies.fulfilled]: (state, action) => {
//       state.replies = state.replies.filter((item) => {
//         // payload에 담아주지 않았기 때문에 id는 메타에 담겨서 내려옴
//         return item.id !== action.meta.arg;
//       });
//     },
//     //패치
//     [__patchReplies.fulfilled]: (state, { payload }) => {
//       state.replies.forEach((reple) => {
//         if (reple.id === payload.id) return (reple.reply = payload.reply);
//         return reple;
//       });
//     },
//   },
// });

// export default replySlice.reducer;
