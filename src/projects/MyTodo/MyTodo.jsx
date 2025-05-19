import React, { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever, MdEdit } from "react-icons/md";
import "./MyTodo.css";

const MyTodo = () => {
  const todokey = "reactTodo";
  const [inputValue, setInputValue] = useState("");
  const [updateTodo, setUpdateTodo] = useState("");
  const [isUpdating, setIsUpdating] = useState(null);
  const [task, setTask] = useState(() => {
    const rawtodo = localStorage.getItem(todokey);
    if (!rawtodo) return [];
    return JSON.parse(rawtodo);
  });
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
  localStorage.setItem(todokey, JSON.stringify(task));
  // DATE AND TIME
  useEffect(() => {
    const Interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(Interval);
  }, []);
  const handleDeleteTodo = (value) => {
    const updatedTasks = task.filter((todo) => todo.content !== value);
    setTask(updatedTasks);
  };
  const handleCheckTodo = (value) => {
    setTask((prev) => {
      return prev.map((todo) => {
        if (todo.content === value)
          return {
            ...todo,
            state: todo?.state === "pending" ? "completed" : "pending",
          };
        else return todo;
      });
    });
  };
  const handleUpdateTodo = (id) => {
    setTask((pre) => {
      return pre.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            content: updateTodo,
          };
        } else return todo;
      });
    });
    setUpdateTodo(null);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200 w-screen px-4">
      <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl">All Tasks</h1>
      <h1 className="mt-3 sm:mt-4 md:mt-5 font-bold text-lg sm:text-2xl md:text-3xl">{dateTime}</h1>
      <div className="flex flex-col sm:flex-row w-full sm:w-[80%] md:w-[60%] mt-4 sm:mt-6 md:mt-8 gap-4 items-center justify-center">
        <input
          type="search"
          placeholder="Enter Todo"
          value={inputValue}
          onChange={(event) => handleInputChange(event.target.value)}
          className="w-full px-3 sm:px-4 py-2 rounded-md outline-none border border-gray-500 focus:border-yellow-500 text-sm sm:text-base"
        />        <button
          className="w-full sm:w-auto bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out cursor-pointer text-sm sm:text-base"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>

      {task.length === 0 ? (
        <div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-10">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">No Task Found</h1>
        </div>
      ) : (
        <ul className="space-y-3 sm:space-y-4 w-full max-w-[95%] sm:max-w-[80%] md:max-w-[60%] mt-6 sm:mt-8">
          {task.map((todo) => (
            <li
              key={todo.id}
              className={`bg-white ${
                todo?.state === "completed"
                  ? "border-2 border-yellow-600 shadow-yellow-400"
                  : ""
              } p-4 flex items-center justify-between flex-1 rounded-lg shadow-md`}
            >
              {isUpdating === todo.id ? (
                <div className="flex flex-1 gap-4">
                  <form onSubmit={() =>handleUpdateTodo(todo.id)} className="w-[80%]">
                    <input
                      type="search"
                      placeholder="Update Todo"
                      value={updateTodo}
                      onChange={(event) => setUpdateTodo(event.target.value)}
                      className="w-full px-4 py-2 rounded-md outline-none border border-gray-500 focus:border-yellow-500"
                    />
                  </form>
                </div>
              ) : (
                <span>{todo.content}</span>
              )}{" "}
              <div className="flex items-center gap-4">
                <button>
                  <span className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer">
                     <button class="Btn"  onClick={() => setIsUpdating(todo.id)}>
      <svg class="svg" viewBox="0 0 512 512">
        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
       
    </button>

                      
                    
                  </span>
                </button>
                <button>
                  <span className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out cursor-pointer">
                    <MdDeleteForever
                      className="w-[30px] h-[30px]"
                      onClick={() => handleDeleteTodo(todo.content)}
                    />
                  </span>
                </button>
                <button>
                  <span className="text-green-500 hover:text-green-700 transition duration-300 ease-in-out cursor-pointer">
                    <MdCheck
                      className="w-[30px] h-[30px]"
                      onClick={() => handleCheckTodo(todo.content)}
                    />
                  </span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => setTask([])}
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-5 hover:bg-red-600 transition duration-300 ease-in-out cursor-pointer"
      >
        Clear All
      </button>
    </div>
  );
};

export default MyTodo;
