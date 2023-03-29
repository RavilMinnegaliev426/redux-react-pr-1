import "./App.css";

import { useState } from "react";
import TodoList from "./components/todoList";
import InputFiled from "./components/inputFiled";
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          complited: false,
        },
      ]);
      setText("");
    }
  };

  const toggelTodoComlite = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          complited: !todo.complited,
        };
      })
    );
  };
  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <InputFiled text={text} handelInput={setText} handelSubmit={addTodo} />
      <TodoList
        todos={todos}
        toggelTodoComlite={toggelTodoComlite}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
