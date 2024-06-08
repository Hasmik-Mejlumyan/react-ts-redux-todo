import request from "../utils/request";
import {IPost} from "../types";

interface IResponse<T> {
  success: boolean;
  data: T;
  message: string;
  statusCode: number;
}

const postService = {
  // getPosts<T>() {
  //   return request<IResponse<T>>("GET", "posts");
  // },
  getPosts<T>() {
    return request<T>("GET", "posts");
  },
};

export default postService;