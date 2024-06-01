import {FC} from "react";
import {ITodoListItemProps} from './types';
import {useAppDispatch} from "../../store";
import {deleteTodo, editTodo} from '../../store/todo';

const TodoListItem: FC<ITodoListItemProps> = ({todo}) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    dispatch(editTodo(todo.id));
  }

  return (
    <li>
      <span>{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  )
};

export default TodoListItem;