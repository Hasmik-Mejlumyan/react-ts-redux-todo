import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {getPosts, selectPosts, selectIsLoading} from "../../store/post";
import PostItem from "../../components/PostItem";
import PostForm from "../../components/PostForm";


const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  console.log(posts, 'posts')

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PostForm />
      <ul>
        {posts.map(post => (
          <PostItem key={post.id} post={post}/>
        ))}
      </ul>
    </div>

  )
};

export default Posts;