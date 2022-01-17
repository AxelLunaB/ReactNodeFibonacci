import { createSlice } from "@reduxjs/toolkit";

export const name = "fibonacci";

export const slice = createSlice({
  name,
  initialState: {
    value: 0,
    isLoading: false,
    result: 0,
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setLoadingValue: (state, action) => {
      state.isLoading = action.payload;
    },
    resetValue: (state) => {
      state.value = 0;
    },
  },
});

export const { actions, reducer } = slice;
