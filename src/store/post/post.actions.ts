import {createAsyncThunk} from "@reduxjs/toolkit";
import postActionTypes from "./post.actionTypes";
import {IPost} from "../../types";
import postService  from "../../services/post";


// const aaa = (data, index, navigate) => async (dispatch, getState) => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     dispatch({type: postActionTypes.GET_POSTS_SUCCESS, payload: data});
//   } catch (error) {
//     dispatch({type: postActionTypes.GET_POSTS_ERROR, payload: error});
//   }
// }


export const getPosts = createAsyncThunk<IPost[]>(postActionTypes.GET_POSTS, async () => {
  try {
    const response = await postService.getPosts<IPost[]>();

    if (!response.data) {
      throw new Error('Something went wrong');
    }

    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.message;
  }
})
