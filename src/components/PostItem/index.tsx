import {FC} from "react";
import {IPostItemProps} from "./types";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../store";
import {deletePost} from "../../store/post";

const PostItem: FC<IPostItemProps> = ({post}) => {
  const dispatch = useAppDispatch();


  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <li style={{marginBottom: '10px', border: '1px solid black'}}>
      <Link to={`/posts/${post.id}`}>Go to post page</Link>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <button onClick={handleDelete}>Delete this Item</button>
    </li>
  )
};

export default PostItem;