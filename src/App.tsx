import React from 'react';
import {TodoForm, TodoList, UserForm, UserList} from './components';

function App() {

  return (
    <div>
      <TodoForm />
      <TodoList />

      <div>
        <UserForm />
        <UserList />
      </div>
    </div>
  );
}

export default App;
