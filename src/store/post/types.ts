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