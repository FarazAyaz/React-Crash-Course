import React, { useState } from 'react';
import { MdCheck, MdDeleteForever } from 'react-icons/md';

const MyTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleAddTodo = () => {
    if (!inputValue) {
      alert("Please enter a todo");
      return;
    }

    // Check for duplicate tasks
    if (task.some((t) => t.content === inputValue)) {
      alert("Task already exists");
      setInputValue("");
      return;
    }

    // Add new task
    const todo = {
      id: task.length + 1,
      content: inputValue,
      state: "pending",
    };

    setTask((prevTask) => [...prevTask, todo]);
    setInputValue("");
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-200 w-screen'>
      <h1 className='font-semibold text-3xl '>All Tasks</h1>
      <div className='flex w-[40%] mt-8 gap-8 items-center justify-center'>
        <input 
          type="search" 
          placeholder='Enter Todo' 
          value={inputValue}
          onChange={(event) => handleInputChange(event.target.value)}
          className ='w-full px-4 py-2 rounded-md outline-none border border-gray-500 focus:border-yellow-500' 
        />
        <button 
          className='bg-yellow-500 text-white px-2 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out cursor-pointer'
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>

      {task.length === 0 ? (
        <div className='flex justify-center items-center mt-10'> 
          <h1 className='text-2xl font-semibold'>No Task Found</h1> 
        </div>
      ) : (
        <ul className="space-y-4  w-full max-w-[60%] mt-8">
          {task.map((todo) => (
            <li key={todo.id} className='flex justify-between  bg-white shadow-md rounded-lg p-4 my-2 '> 
              <span>{todo.content}</span> 
              <div className='flex items-center gap-4'>
                <button>
                <span className='text-red-500 hover:text-red-700 transition duration-300 ease-in-out cursor-pointer'>
                  <MdDeleteForever className='w-[30px] h-[30px]'/> 
                </span>
              </button> 
              <button>
                <span className='text-green-500 hover:text-green-700 transition duration-300 ease-in-out cursor-pointer'>
                  <MdCheck className='w-[30px] h-[30px]'/> 
                </span>
              </button> 
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyTodo;
