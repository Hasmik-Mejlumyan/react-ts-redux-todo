import {useAppSelector} from "../../store";
import {selectTodos} from "../../store/todo";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useAppSelector(selectTodos);

  console.log(todos, 'todos')

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