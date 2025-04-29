import "./Todo.css";
import React, { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import TodoForm from "./TodoForm";

const Todo = () => {
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prev) => [...prev, inputValue]);
  };

  // Update date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // ← add empty dependency array to run once on mount

  // Delete a single task
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  // Clear all tasks
  const handleClearAll = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => (
            <li key={index} className="todo-item">
              <span>{curTask}</span>
              <button className="check-btn">
                <MdCheck />
              </button>
              <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}>
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearAll}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
