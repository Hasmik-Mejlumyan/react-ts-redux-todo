import {createReducer} from "@reduxjs/toolkit";
import {IPostState} from "./types";
import {getPosts} from "./post.actions";

const initialState: IPostState = {
  posts: [],
  entry: null,
  isLoading: false,
  error: null,
};

const postReducer = createReducer(initialState, (builder) => {
  builder
    // getPosts
    .addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(getPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
      // state.error = action.error.message as string;
      // state.error = action.error.message!;
    })

    // getPost

    .addDefaultCase(state => state)
})

export default postReducer;