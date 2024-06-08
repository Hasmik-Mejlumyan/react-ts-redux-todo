import {FC} from "react";
import {IPostItemProps} from "./types";
import {Link} from "react-router-dom";

const PostItem: FC<IPostItemProps> = ({post}) => {

  return (
    <li style={{marginBottom: '10px', border: '1px solid black'}}>
      <Link to={`/posts/${post.id}`}>Go to post page</Link>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </li>
  )
};

export default PostItem;