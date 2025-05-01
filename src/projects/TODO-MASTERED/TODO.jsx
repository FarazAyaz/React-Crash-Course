import React, { useState } from "react";

const TODO = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue) return alert("Please enter a todo");
    const todo = {
      id: todos.length + 1,
      content: inputValue,
      state: "pending",
    };
    const newTodos = todos 
    newTodos.push(todo)
    setTodos(newTodos);
    setInputValue("");
  };

  console.log(todos);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 w-screen py-40">
      <h1 className="text-center text-3xl font-mono ">All Tasks</h1>
      <div className="flex gap-8 items-center justify-center mt-10 w-[40%] ">
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Todo"
          className="px-4 py-2 rounded-lg w-2/3 border-gray-500 border-[1px] outline-none focus:border-pink-600 focus:border-2"
        />
        <button
          className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-300 ease-in-out cursor-pointer"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TODO;
