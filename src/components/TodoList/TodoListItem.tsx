import {FC} from "react";
import {ITodoListItemProps} from './types';
import {useAppDispatch} from "../../store";
import {changeCompletion, deleteTodo, editTodo} from '../../store/todo';

const TodoListItem: FC<ITodoListItemProps> = ({todo}) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    dispatch(editTodo(todo.id));
  }

  const handleChecked = () => {
    dispatch(changeCompletion(todo.id));
  }

  return (
    <li>
      <input type="checkbox" checked={todo.isCompleted} onChange={handleChecked} />
      <span>{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  )
};

export default TodoListItem;