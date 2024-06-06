import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {IUser} from "../../types";
import {useAppDispatch} from "../../store";
import {addUser} from "../../store/user";

const UserForm = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: IUser = {
      id: Date.now(),
      name: value,
      age: 45,
      email: 'JHhPm@example.com',
      profession: 'Developer'
    }

    dispatch(addUser(newUser));
    setValue('');
  }

  return (
    <form onSubmit={handleSaveUser}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Save User</button>
    </form>
  );
};

export default UserForm;