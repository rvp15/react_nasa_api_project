import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  galleryPics: [],
};
export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setGalleryPics: (state, action) => {
      state.galleryPics = action.payload;
    },
  },
});
//exporting reducer
export const { setGalleryPics } = gallerySlice.actions;

export default gallerySlice.reducer;
