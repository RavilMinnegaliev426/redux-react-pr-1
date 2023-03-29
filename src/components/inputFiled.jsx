const InputFiled = ({ text, handelInput, handelSubmit }) => {
  return (
    <label>
      <input value={text} onChange={(e) => handelInput(e.target.value)} />
      <button onClick={handelSubmit}>Add Todo</button>
    </label>
  );
};

export default InputFiled;
