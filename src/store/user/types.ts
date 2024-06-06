import {IUser} from "../../types";


export interface IUserState {
  users: IUser[];
  userEntry: IUser | null;
}