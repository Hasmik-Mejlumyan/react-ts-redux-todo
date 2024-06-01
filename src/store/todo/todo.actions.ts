import { createAction } from "@reduxjs/toolkit";
import todoActionsTypes from "./todo.actionTypes";
import {ITodo} from "../../types";


export const addTodo = createAction<ITodo>(todoActionsTypes.ADD_TODO)
export const deleteTodo = createAction<number>(todoActionsTypes.DELETE_TODO)
export const editTodo = createAction<number>(todoActionsTypes.EDIT_TODO)
export const updateTodo = createAction<string>(todoActionsTypes.UPDATE_TODO)
export const resetEntry = createAction(todoActionsTypes.RESET_ENTRY)

// const addTodo = (todo: ITodo) => ({
//   type: todoActionsTypes.ADD_TODO,
//   payload: todo
// })