import {useAppSelector} from "../../store";
import {selectUsers} from "../../store/user";
import {IUserListProps} from "./types";
import UserListItem from "./userListItem";


const UserList = () => {
  const users = useAppSelector(selectUsers);

  console.log(users, 'users')
  return (
    <ul>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;