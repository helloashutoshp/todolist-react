import { useState } from "react";
// import Todoitem from "./Todoitem";
import Form from "./Form";
import Todolist from "./Todolist";

export default function Todo() {
  const [todo, setTodo] = useState({ name: "", done: false });

  const [todos, setTodos] = useState([]);
  const count_complete = todos.filter((single_todo) => single_todo.done).length;
  const total_task = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        count={count_complete}
        total_count={total_task}
      />
    </div>
  );
}
