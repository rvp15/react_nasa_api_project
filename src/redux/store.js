import { configureStore } from '@reduxjs/toolkit'
//Importing all reducers 
import podReducer from  '../slices/podSlice'
import galleryReducer from '../slices/gallerySlice'
import likedReducer from    '../slices/likedSlice'

//The Redux store brings together the state, actions, and reducers
export const store = configureStore({
    reducer:{
        pod:podReducer,
        gallery:galleryReducer,
        liked:likedReducer
    }
})