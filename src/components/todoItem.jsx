const Todoitem = ({ id, text, completed, removeTodo, toggelTodoComlite }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggelTodoComlite(id)}
      />
      <span>{text}</span>
      <span className="deleted" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default Todoitem;
