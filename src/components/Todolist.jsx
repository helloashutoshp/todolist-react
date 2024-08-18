import style from "./form_style.module.css";

export default function Todolist({ todos, setTodos, count, total_count }) {
  function handleEvent(item) {
    setTodos(todos.filter((single_todo) => single_todo !== item));
  }

  function handleItem(name) {
    const arrayList = todos.map((single_todo) =>
      single_todo.name === name
        ? { ...single_todo, done: !single_todo.done }
        : single_todo
    );

    setTodos(arrayList);
  }

 const sortedList = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={style.item}>
      <p>Task completed:{count} </p>
      <p>Total Task:{total_count}</p>
      <hr />
      {sortedList.map((item, index) => (
        <h3 key={index}>
          <span
            className={item.done ? style.crossline : ""}
            onClick={() => handleItem(item.name)}
          >
            {item.name}
          </span>

          <span>
            <button onClick={() => handleEvent(item)} className={style.del}>
              X
            </button>
          </span>

          <hr />
        </h3>
      ))}
    </div>
  );
}
