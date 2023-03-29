import Todoitem from "./todoItem";

const TodoList = ({ todos, removeTodo, toggelTodoComlite }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todoitem
          key={todo.id}
          removeTodo={removeTodo}
          toggelTodoComlite={toggelTodoComlite}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
