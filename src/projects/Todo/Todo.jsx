import './Todo.css';
import React, { useState } from 'react';
import { MdCheck, MdDeleteForever } from 'react-icons/md';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';

const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    // to check that input field is empty or not
    if (!content) return;
    // to check weather the data is already present or not
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
    if (ifTodoContentMatched) return;
    setTask((prev) => [...prev, { id, content, checked }]);
  };

  // Update date and time every second

  // ← add empty dependency array to run once on mount

  // Delete a single task
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  // Clear all tasks
  const handleClearAll = () => {
    setTask([]);
  };
  // handle checked todo
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
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
