import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../configureStore";

const userStata = (state: RootState) => state.user;


export const selectUsers = createSelector(
  userStata,
  (state) => state.users
)

export const selectUserEntry = createSelector(
  userStata,
  (state) => state.userEntry
)