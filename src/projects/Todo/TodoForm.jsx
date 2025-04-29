import React, { useState } from 'react'


const TodoForm = ({onAddTodo}) => {
     const [inputValue, setinputValue] = useState("");
     const handleInputChange = (value) => {
        setinputValue(value);
    }

    const handleFormSubmit = (event) => {
        onAddTodo(inputValue);
        event.preventDefault();
        setinputValue("");
    }
  return (
    <>
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
      
    </>
  )
}


export default TodoForm
