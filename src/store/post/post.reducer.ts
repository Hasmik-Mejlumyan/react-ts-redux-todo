import {createReducer} from "@reduxjs/toolkit";
import {IPostState} from "./types";
import {createPost, getPost, getPosts} from "./post.actions";

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
    .addCase(getPost.fulfilled, (state, action) => {
      state.entry = action.payload;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(getPost.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    })

    // createPost
    .addCase(createPost.fulfilled, (state, action) => {
      state.posts.unshift(action.payload);
      state.isLoading = false;
      state.error = null;
    })
    .addCase(createPost.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(createPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    })

    .addDefaultCase(state => state)
})

export default postReducer;