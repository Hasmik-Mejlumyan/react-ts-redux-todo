import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {createPost} from "../../store/post";


const PostForm = () => {
  const dispatch = useAppDispatch();

  const [post, setPost] = useState({title: '', body: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setPost({...post, [name]: value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      ...post,
      userId: 1,
    }

    dispatch(createPost(newPost));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" onChange={handleChange} value={post.title} placeholder="title" />
      <input type="text" name="body" onChange={handleChange} value={post.body} placeholder="body" />
      <button>Create post</button>
    </form>
  );
};

export default PostForm;
