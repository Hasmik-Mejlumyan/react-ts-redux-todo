import {NavigateFunction} from "react-router-dom";
import {IPost} from "../../types";

export interface IPostState {
  posts: IPost[];
  entry: IPost | null;
  isLoading: boolean;
  error: string | null;
}

// getPosts action
export interface IGetPostsReturnData {
  whom: string;
  data: IPost[];
}

// getPost action
export interface IGetPostPayloadData {
  id: string;
  navigate: NavigateFunction;
}