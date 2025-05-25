// ... import statements
import React, { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./MyTodo.css";

const MyTodo = () => {
  const todokey = "reactTodo";
  const [inputValue, setInputValue] = useState("");
  const [updateTodo, setUpdateTodo] = useState("");
  const [isUpdating, setIsUpdating] = useState(null);
  const [isInsertingDescription, setIsInsertingDescription] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [task, setTask] = useState(() => {
    const rawtodo = localStorage.getItem(todokey);
    return rawtodo ? JSON.parse(rawtodo) : [];
  });
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    localStorage.setItem(todokey, JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddTodo = () => {
    if (!inputValue) {
      alert("Please enter a todo");
      return;
    }

    if (task.some((t) => t.content === inputValue)) {
      alert("Task already exists");
      setInputValue("");
      return;
    }

    const todo = {
      id: task.length + 1,
      content: inputValue,
      state: "pending",
      description: "",
    };

    setTask((prevTask) => [...prevTask, todo]);
    setInputValue("");
  };

  const handleDeleteTodo = (value) => {
    const updatedTasks = task.filter((todo) => todo.content !== value);
    setTask(updatedTasks);
  };

  const handleCheckTodo = (value) => {
    setTask((prev) =>
      prev.map((todo) =>
        todo.content === value
          ? {
              ...todo,
              state: todo?.state === "pending" ? "completed" : "pending",
            }
          : todo
      )
    );
  };

  const handleUpdateTodo = (id) => {
    setTask((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, content: updateTodo } : todo
      )
    );
    setUpdateTodo("");
    setIsUpdating(null);
  };

  const handleAddDescription = (id) => {
    setTask((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, description: newDescription } : todo
      )
    );
    setNewDescription("");
    setIsInsertingDescription(null);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200 w-screen px-4">
      <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl">All Tasks</h1>
      <h1 className="mt-3 font-bold text-lg sm:text-2xl md:text-3xl">{dateTime}</h1>

      <div className="flex flex-col sm:flex-row w-full sm:w-[80%] md:w-[60%] mt-4 gap-4 items-center justify-center">
        <input
          type="search"
          placeholder="Enter Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-500 focus:border-yellow-500"
        />
        <button
          onClick={handleAddTodo}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Add Todo
        </button>
      </div>

      {task.length === 0 ? (
        <div className="mt-6">
          <h1 className="text-xl font-semibold">No Task Found</h1>
        </div>
      ) : (
        <ul className="w-full max-w-[95%] sm:max-w-[80%] md:max-w-[60%] mt-6 space-y-4">
          {task.map((todo) => (
            <li
              key={todo.id}
              className={`bg-white ${
                todo?.state === "completed"
                  ? "border-2 border-yellow-600 shadow-yellow-400"
                  : ""
              } p-4 rounded-lg shadow-md`}
            >
              <div className="flex items-center justify-between">
                {isUpdating === todo.id ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleUpdateTodo(todo.id);
                    }}
                    className="flex flex-1 gap-4"
                  >
                    <input
                      type="text"
                      value={updateTodo}
                      onChange={(e) => setUpdateTodo(e.target.value)}
                      className="w-full px-4 py-2 rounded-md border border-gray-500 focus:border-yellow-500"
                    />
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                      Save
                    </button>
                  </form>
                ) : (
                  <span>{todo.content}</span>
                )}

                <div className="flex items-center gap-2">
                  <button className="Btn" onClick={() => {
                    setIsUpdating(todo.id);
                    setUpdateTodo(todo.content);
                    setIsInsertingDescription(null);
                  }}>
                    Edit
                    <svg className="svg" viewBox="0 0 512 512">
                      <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                    </svg>
                  </button>

                  <button
                    onClick={() => {
                      setIsInsertingDescription(todo.id);
                      setIsUpdating(null);
                    }}
                    className="bg-purple-500 text-white px-2 py-1 rounded-md hover:bg-purple-600 text-sm"
                  >
                    Insert Description
                  </button>

                  <MdDeleteForever
                    className="w-[30px] h-[30px] text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => handleDeleteTodo(todo.content)}
                  />
                  <MdCheck
                    className="w-[30px] h-[30px] text-green-500 hover:text-green-700 cursor-pointer"
                    onClick={() => handleCheckTodo(todo.content)}
                  />
                </div>
              </div>

              {isInsertingDescription === todo.id && (
                <div className="mt-2 flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Enter description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-400 rounded-md"
                  />
                  <button
                    onClick={() => handleAddDescription(todo.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 w-fit"
                  >
                    Submit Description
                  </button>
                </div>
              )}

              {todo.description && (
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Description:</strong> {todo.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => setTask([])}
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-5 hover:bg-red-600"
      >
        Clear All
      </button>
    </div>
  );
};

export default MyTodo;
