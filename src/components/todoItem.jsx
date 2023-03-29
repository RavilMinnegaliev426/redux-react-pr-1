import { useDispatch } from "react-redux";
import { removeTodo, toggelTodoComlite } from "../store/todoSlice";
const Todoitem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggelTodoComlite({ id }))}
      />
      <span>{text}</span>
      <span className="deleted" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};

export default Todoitem;
