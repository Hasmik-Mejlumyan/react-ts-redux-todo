import {createReducer} from "@reduxjs/toolkit";
import {ITodoState} from "./types";
import {addTodo, changeCompletion, deleteTodo, editTodo, resetEntry, updateTodo} from "./todo.actions";

const initialState: ITodoState = {
  todos: [],
  entry: null,
}


const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      // return {
      //   ...state,
      //   todos: [...state.todos, action.payload],
      // }

      state.todos.push(action.payload);
    })
    .addCase(deleteTodo, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id  !== action.payload);
    })
    .addCase(editTodo, (state, action) => {
      state.entry = state.todos.find(todo => todo.id === action.payload) || null;
    })
    .addCase(updateTodo, (state, action) => {
      if (state.entry) {
        state.todos = state.todos.map(todo => todo.id === state.entry?.id ? {...state.entry, title: action.payload} : todo )
      }
    })
    .addCase(resetEntry, (state) => {
      state.entry = null
    })
    .addCase(changeCompletion, (state, action) => {
      state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo, isCompleted: !todo.isCompleted} : todo)
    })
    .addDefaultCase((state) => state)
})

export default todoReducer;


// const todoReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_TODO:
//       return { ...state, todos: [...state.todos, payload] }
//     default:
//       return state
//   }
// }