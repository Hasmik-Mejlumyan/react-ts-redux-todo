import {createAsyncThunk, createAction} from "@reduxjs/toolkit";
import postActionTypes from "./post.actionTypes";
import {IPost, IPostData} from "../../types";
import postService  from "../../services/post";
import {IGetPostPayloadData} from "./types";


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
});

export const getPost = createAsyncThunk<IPost, IGetPostPayloadData>(postActionTypes.GET_POST, async ({id, navigate}) => {
  try {
    // @ts-ignore
    const response = await postService.getPost<IPost>(id);

    if (!response.data?.id) {
      throw new Error('Something went wrong');
    }

    return response.data;
  } catch (error: any) {
    console.log(error);

    // Call some toast function
    navigate('/not-found');
    throw error.message;
  }
});

export const createPost = createAsyncThunk<IPost, IPostData>(postActionTypes.CREATE_POST, async (data) => {
  try {
    const response = await postService.createPost<IPost, IPostData>(data);

    if (!response.data?.id) {
      throw new Error('Something went wrong');
    }

    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.message;
  }
})


export const resetEntry = createAction(postActionTypes.RESET_ENTRY)
