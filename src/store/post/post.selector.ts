import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../configureStore";

const postState = (state: RootState) => state.post;

export const selectPosts = createSelector(
  postState,
  (state) => state.posts
);

export const selectIsLoading = createSelector(
  postState,
  (state) => state.isLoading
)