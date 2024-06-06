import {FC} from "react";
import {IUserListProps} from './types';

const UserListItem: FC<IUserListProps> = ({user}) => {
  return (
    <li>
      <span>Name is: {user.name}</span>
      <span>Age is: {user.age}</span>
      <span>Profession is: {user.profession}</span>
      <span>Email is: {user.email}</span>
    </li>
  )
};

export default UserListItem;