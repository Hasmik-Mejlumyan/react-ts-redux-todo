import {useParams, useNavigate, Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store";
import {selectPostEntry, getPost, selectIsLoading, resetEntry} from "../../store/post";
import {useEffect} from "react";


const Post = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectPostEntry)
  const isLoading = useAppSelector(selectIsLoading);


  useEffect(() => {
    if (id) {
      dispatch(getPost({id, navigate}));

    } else {
      alert('Id should be in range 1 to 100');
    }

    return () => {
      dispatch(resetEntry());
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    post && <div>
      <h1> Post Title: {post.title}</h1>
      <Link to="/posts">Back to list page</Link>
    </div>
  );
};

export default Post;