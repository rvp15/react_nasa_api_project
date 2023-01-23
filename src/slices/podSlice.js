import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  podData: {},
};
export const podSlice = createSlice({
  name: "pod",
  initialState,
  reducers: {
    setpod: (state, action) => {
      state.podData = action.payload;
    },
  },
});

export const { setpod } = podSlice.actions;

export default podSlice.reducer;
