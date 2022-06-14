import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText) {
      const newTodoItem = {
        id: uuidv4().substring(0, 8),
        text: todoText,
        isDone: false,
      };
      const updatedTodoItems = [...todos, newTodoItem];

      setTodos(updatedTodoItems);
      setTodoText("");
    } else {
      alert("zehmet olmasa bir shey yaz");
    }
  };

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleMoveTo = (id) => {
    const mappedItems = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });

    setTodos(mappedItems);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Todo</label> <br />
        <input
          placeholder="enter your todo"
          value={todoText}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Add" />
      </form>
      <ul>
        {todos.map((todoItem) => {
          return (
            <li
              key={todoItem.id}
              // style={{
              //   textDecorationStyle: "solid",
              //   textDecorationLine: todoItem.isDone ? "line-through" : "none",
              // }}
              className={todoItem.isDone ? "isDone" : ""}
            >
              #{todoItem.id} - {todoItem.text}
              <button
                onClick={() => {
                  handleDelete(todoItem.id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handleMoveTo(todoItem.id);
                }}
              >
                {todoItem.isDone ? "Move To Undone" : "Move To Done"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
