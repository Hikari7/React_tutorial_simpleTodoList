import React from "react";
import Todo from "./Todo";

//useStateからのオブジェクトをpropsで受け取る
const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
  // <div>{todos}</div>
  //todoコンポーネントでさらにpropsで渡してあげる
  //todosの中の1つのタスク(todo)を取り出して、それをTodoコンポーネントに渡していく
};

export default TodoList;
