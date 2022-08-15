import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
    //todo　= 自分のID
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick} //addEventlistener的なやつ
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
