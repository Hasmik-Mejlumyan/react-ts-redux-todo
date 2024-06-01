import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {addTodo, updateTodo, selectEntry, resetEntry} from "../../store/todo";
import {ITodo} from "../../types";

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const entry = useAppSelector(selectEntry);

  const [value, setValue] = useState('');

  console.log(entry, 'entry')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (entry) {
      dispatch(updateTodo(value));
      setValue('');
      dispatch(resetEntry());
      return;
    }

    const newTodo: ITodo = {
      id: Date.now(),
      title: value,
      isCompleted: false,
    }
    dispatch(addTodo(newTodo));
    setValue('');
  }

  useEffect(() => {
    if (entry) {
      setValue(entry.title);
    }
  }, [entry])

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} type="text"/>
      <button>{entry ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;