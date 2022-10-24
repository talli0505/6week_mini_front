import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
};

export const __postSignup = createAsyncThunk(
  "posts/postSignup",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:4000/users", payload, {
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
  extraReducers: {},
});

export default signupSlice.reducer;
