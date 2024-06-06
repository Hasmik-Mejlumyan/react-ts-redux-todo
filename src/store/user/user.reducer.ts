import {createReducer} from "@reduxjs/toolkit";
import {IUserState} from "./types";
import {addUser} from './user.action';


const initialState: IUserState = {
  users: [],
  userEntry: null,
}

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addUser, (state, action) => {
      state.users.push(action.payload);
    })
});

export default userReducer;