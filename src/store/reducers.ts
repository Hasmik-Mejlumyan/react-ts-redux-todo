import todoReducer from "./todo/todo.reducer";
import userReducer from "./user/user.reducer";
import postReducer from "./post/post.reducer";


const reducers = {
  todo: todoReducer,
  user: userReducer,
  post: postReducer,
};

export default reducers;