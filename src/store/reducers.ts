import todoReducer from "./todo/todo.reducer";
import userReducer from "./user/user.reducer";


const reducers = {
  todo: todoReducer,
  user: userReducer
};

export default reducers;