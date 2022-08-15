// import "./App.css";
import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const [todos, setTodos] = useState(["Todo1", "Todo2"]);
  const [todos, setTodos] = useState([
    // { id: 1, name: "Todo1", completed: false },空の配列で初期化
  ]);
  //hooks, 初期値も設定。objectをいくつか含んだ変数を設定し使えるようにする

  const todoNameRef = useRef(); //useRef=文字列を取得する
  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNameRef.current.value;
    //setTodos: 引数の中の要素を更新することができる(タスクの追加)
    if (name === "") return;
    //もし空の文字列が入力されたらreturn(この操作は実行するされない)
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
      //prevTodos: prevTodos(前の既にあるタスク)に、コンマ区切り後のオブジェクトを足す
    });
    //タスクの追加
    todoNameRef.current.value = null;
  };

  //チェックボックスの操作
  const toggleTodo = (id) => {
    //id=どのタスクにチェックを入れるのか？
    const newTodos = [...todos];
    //汎用性を持たせるためにnewTodosという形で一旦コピーを作る
    const todo = newTodos.find((todo) => todo.id === id);
    //find関数：以降の条件式を見つけたものを変数に入れる(今回は引数のidとtodo.idの番号と一致したもの)
    todo.completed = !todo.completed;
    //completedを！で反転させる
    setTodos(newTodos);
    //更新してあげる
  };

  //全部削除
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
    //setTodsはとりあえず更新や
  };

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
    </div>
    //.lemgth使うことで未完了のタスクの数を出す
  );
}

export default App;
