import { useState } from "react";

import style from "./form_style.module.css";

export default function Form({ todos, setTodos,todo,setTodo }) {
  function handlesubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"",done:false});
  }
  return (
    <>
      <div>
        <form className={style.form} onSubmit={handlesubmit}>
          <div className={style.con}>
            <input
              className={style.inp}
              type="text"
              onChange={(e) => setTodo({name:e.target.value,done:false})}
              value={todo.name}
              placeholder="Enter your items...."
            />
            <button className={style.btn}>Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
