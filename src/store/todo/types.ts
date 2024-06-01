import {ITodo} from "../../types";

export interface ITodoState {
  todos: ITodo[];
  entry: ITodo | null;
}