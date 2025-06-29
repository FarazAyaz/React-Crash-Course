import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setinputValue] = useState({});
  const handleInputChange = (value) => {
    setinputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    onAddTodo(inputValue);
    event.preventDefault();
    setinputValue({ id: '', content: '', checked: false });
  };
  return (
    <>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue.content}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <button type="submit" className="form-button">
            Add Task
          </button>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
