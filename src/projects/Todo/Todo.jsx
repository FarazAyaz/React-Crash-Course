import "./Todo.css"
import React, { useState } from 'react'

const Todo = () => {
    const [inputValue, setinputValue] = useState("");
    const handleInputChange = (value) => {
        setinputValue(value);
    }
    const handleFormSubmit = (event) => {
         event.preventDefault()
    }

  return (
    <section className='todo-container'>
        <header>
            <h1>Todo List</h1>
        </header>
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className='todo-input' autoComplete='off' value={inputValue} onChange={(event)=> handleInputChange(event.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="form-button">
                    Add Task
                    </button>
                </div>
            </form>

        </section>
    </section>
  )
}

export default Todo
