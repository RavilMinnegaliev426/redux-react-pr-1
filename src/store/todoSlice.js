import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        complited: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggelTodoComlite(state, action) {
      const toggelTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggelTodo.complited = !toggelTodo.complited;
    },
  },
});

export const { addTodo, removeTodo, toggelTodoComlite } = todoSlice.actions;

export default todoSlice.reducer;
