//we are using react redux to handle get update and post our photo text ...
//this is the store

//this is the slice for our post 
import { configureStore } from "@reduxjs/toolkit";

//import postReducer 
import postReducer from "./features/postSlice"
export default configureStore({ //this is our default blank store
    //reducer is slices
    reducer: { //blank store is created, whatever reducer that we have created in postSlice.tsx we can import it
        post: postReducer,
    }
    })
//we have to define the slice that we are created in postSlice.tsx