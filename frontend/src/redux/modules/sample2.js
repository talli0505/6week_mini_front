import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const __get = createAsyncThunk("", async (payload, thunkAPI) => {
  try {
    const data = await axios.get("");
  } catch (error) {}
});

export const __post = createAsyncThunk("", async (payload, thunkAPI) => {
  try {
    const data = await axios.post("");
  } catch (error) {}
});

export const __delete = createAsyncThunk("", async (payload, thunkAPI) => {
  try {
    const data = await axios.delete("");
  } catch (error) {}
});

export const __patch = createAsyncThunk("", async (payload, thunkAPI) => {
  try {
    const data = await axios.patch("");
  } catch (error) {}
});

const __Slice = createSlice({
  name: "",
  initialState,
  reducers: {},
  extraReducers: {},
});

// export default ;
