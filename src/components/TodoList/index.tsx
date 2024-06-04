import {useAppSelector} from "../../store";
import {selectTodos} from "../../store/todo";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useAppSelector(selectTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  )
};


export default TodoList;