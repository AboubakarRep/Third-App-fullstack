
//we have to define the slice that we are created in postSlice.tsx
import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: { //initial state, we will be handling the state so we have to define our initial state
        value: [] //blank array for initial value of our initial state
    },
    reducers: { //reducers are differents actions, differents events that we are going to perform like add the post, save post get all the posts, get a particular post , delete post
        addPost: (state, action) => {  //add post to the database, it is add post reducers for that
            state.value.unshift(action.payload); //state is updated
        },
        addAllPost: (state, action) => {
            state.value.push(...action.payload);
        }
        }
    })

    //we define what can be selected and what can be the actions
    export const {addPost, addAllPost} = postSlice.actions;
    //export state
    export const selectPost = (state:any) => state.post.value;
    export default postSlice.reducer;