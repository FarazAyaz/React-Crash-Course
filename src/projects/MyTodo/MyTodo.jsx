import React, { useEffect, useState } from 'react';
import { MdCheck, MdDeleteForever } from 'react-icons/md';

const MyTodo = () => {
  const todokey = "reactTodo"
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState(
    () => {
      const rawtodo = localStorage.getItem(todokey)
      if (!rawtodo) return [];
      return JSON.parse(rawtodo)
    }
  );
  const [dateTime, setDateTime] = useState("");

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
// add todo in Local storage
localStorage.setItem(todokey, JSON.stringify(task))
  // DATE AND TIME
  useEffect(()=> {
    const Interval = setInterval(()=> {
    const date = new Date ();
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  setDateTime(`${formattedDate} - ${formattedTime}`); 
  },1000)
    return () => clearInterval(Interval)
},[])
   const handleDeleteTodo = (value) => {
    const updatedTasks = task.filter((todo)=> todo.content !== value);
    setTask(updatedTasks)
  }
  const handleCheckTodo = (value) => {
    setTask((prev) => {
      return prev.map((todo)=> {
        if (todo.content  === value)
          return {
           ...todo,
            state: todo?.state === "pending" ? "completed" : "pending",
          }
        else return todo;
      })
    })
  }

 
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-200 w-screen'>
      <h1 className='font-semibold text-3xl '>All Tasks</h1>
      <h1 className='mt-5 font-bold text-3xl'>{dateTime}</h1>
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
            <li key={todo.id} className={`bg-white ${
                    todo?.state === "completed"
                      ? "border-2 border-yellow-600 shadow-yellow-400"
                      : ""
                  } p-4 flex items-center justify-between flex-1 rounded-lg shadow-md`}
                 > 
              <span>{todo.content}</span> 
              <div className='flex items-center gap-4'>
                <button >
                <span className='text-red-500 hover:text-red-700 transition duration-300 ease-in-out cursor-pointer'>
                  <MdDeleteForever className='w-[30px] h-[30px]' onClick={()=> handleDeleteTodo(todo.content)}/> 
                </span>
              </button> 
              <button>
                <span className='text-green-500 hover:text-green-700 transition duration-300 ease-in-out cursor-pointer'>
                  <MdCheck className='w-[30px] h-[30px]' onClick={() => handleCheckTodo(todo.content)}/> 
                </span>
              </button> 
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setTask([])} className='bg-red-500 text-white px-4 py-2 rounded-lg mt-5 hover:bg-red-600 transition duration-300 ease-in-out cursor-pointer'>
        Clear All
      </button>
    </div>
  );
};

export default MyTodo;
