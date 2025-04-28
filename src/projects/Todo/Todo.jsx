import "./Todo.css";
import React, { useEffect, useState } from "react";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [inputValue, setinputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (value) => {
    setinputValue(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setinputValue("");
      return;
    }
    setTask((prev) => [...prev, inputValue]);
    setinputValue("");
  };

  
 useEffect(()=> {
  const interval = setInterval( () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime (`${formattedDate} - ${formattedTime}`);
  },1000);
  return () => clearInterval(interval);
 })
 // Delete Task
 const handleDeleteTodo = (value) => {
  console.log(value);
  const updatedTask = task.filter((curTask) => curTask !== value);
  setTask(updatedTask);
 }
  // Clear All Task
  const handleClearAll = () => {
    setTask([])
  }

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <button type="submit" className="form-button">
            Add Task
          </button>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button className="delete-btn" onClick={()=>handleDeleteTodo(curTask)}>
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
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
