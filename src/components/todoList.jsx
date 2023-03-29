import Todoitem from "./todoItem";
import { useSelector } from "react-redux";
const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <Todoitem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
