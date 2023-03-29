import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducer: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        complited: false,
      });
    },
    removeTodo(state, action) {},
    toggelTodoComlite(state, action) {},
  },
});
