import React from 'react';
import {TodoForm, TodoList, UserForm, UserList} from './components';
import {Routes, Route, Link} from 'react-router-dom';
import Posts from "./pages/Posts";

function App() {

  return (
    <div>


      <Routes>
        <Route path="/" element={
          <>
            <TodoForm />
            <TodoList />

            <div>
              <UserForm />
              <UserList />
            </div>

            <Link to="/posts">link to Posts page </Link>
          </>
        }/>

        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
