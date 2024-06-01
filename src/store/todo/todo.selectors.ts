import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../configureStore";

const todoState = (state: RootState) => state.todo;


export const selectTodos = createSelector(
  todoState,
  (state) => state.todos
)

export const selectEntry = createSelector(
  todoState,
  (state) => state.entry
)