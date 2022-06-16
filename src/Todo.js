import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState();
  const [currentTodo, setCurrentTodo] = useState();

  useEffect(() => {
    return function () {
      console.log("component was removed");
    };
  }, []);

  useEffect(() => {
    console.log("todo text or todos are changed");
  }, [todoText, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoText) {
      if (currentTodo) {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === currentTodo.id) {
            return { ...todo, text: todoText };
          }
          return todo;
        });
        setTodos(updatedTodos);

        // emptying the state
        setCurrentTodo(null);
        setTodoText("");
      } else {
        const newTodoItem = {
          id: uuidv4().substring(0, 8),
          text: todoText,
          isDone: false,
        };
        const updatedTodoItems = [...todos, newTodoItem];

        setTodos(updatedTodoItems);
        setTodoText("");
      }
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

  const handleEdit = (todoItem) => {
    setCurrentTodo(todoItem);
    setTodoText(todoItem.text);
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
        <input type="submit" value={currentTodo ? "Save" : "Add"} />
      </form>
      {currentTodo && (
        <button
          onClick={() => {
            setCurrentTodo(null);
            setTodoText("");
          }}
        >
          Cancel
        </button>
      )}
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
                  handleEdit(todoItem);
                }}
              >
                Edit
              </button>
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
