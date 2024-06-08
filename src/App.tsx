import React from 'react';
import {TodoForm, TodoList, UserForm, UserList} from './components';
import {Routes, Route, Link} from 'react-router-dom';
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

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
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
