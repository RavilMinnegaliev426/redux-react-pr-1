import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "./store/todoSlice";

import TodoList from "./components/todoList";
import InputFiled from "./components/inputFiled";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputFiled text={text} handelInput={setText} handelSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
