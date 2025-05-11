import React, { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

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
    setTodos((prev) => [...prev, todo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodos((currentState) => {
      return currentState.filter((todo) => todo.id !== id);
    });
  };
  const handleCheckTodo = (id) => {
    setTodos((pre) => {
      return pre.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            state: todo?.state === "pending" ? "completed" : "pending",
          };
        } else return todo;
      });

      
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 w-screen py-40">
      <h1 className="text-center text-3xl font-mono ">All Tasks</h1>
      {/* Taking Input from the user */}
      <div className="flex max-sm:flex-col gap-8 items-center justify-center mt-10 w-[40%] ">
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Todo"
          className="px-4 py-2 rounded- max-sm:w-screen max-sm:max-w-[200%] rounded-2xl sm:w-2/3 border-gray-500 border-[1px] outline-none focus:border-pink-600 focus:border-2"
        />
        <button
          className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-300 ease-in-out cursor-pointer"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      {/* conditional rendering */}
      {todos.length === 0 ? (
        <div>
          <h1 className="font-bold mt-4 text-2xl p-5">PLEASE ENTER TODO</h1>
        </div>
      ) : (
        <>
          <ul className="space-y-4  w-full max-sm:max-w-[80%]  max-w-[60%] mt-8">
            {todos.map((todo) => {
              console.log("This is todo", todo);
              return (
                <li
                  key={todo.id}
                  className={`bg-white ${
                    todo?.state === "completed"
                      ? "border-2 border-green-600 shadow-green-300"
                      : ""
                  } p-4 flex items-center justify-between flex-1 rounded-lg shadow-md`}
                >
                  <h1 className="">{todo.content}</h1>
                  <div className="flex items-center gap-4">
                    <BiCheckCircle
                      className="w-6 h-6 text-green-600 cursor-pointer"
                      onClick={() => handleCheckTodo(todo.id)}
                    />
                    <MdDeleteOutline
                      className="w-6 h-6 text-red-600 cursor-pointer"
                      onClick={() => handleDeleteTodo(todo.id)}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <button
            className="bg-red-500 text-white w-40 text-center h-10 mt-10"
            onClick={() => setTodos([])}
          >
            Clear All
          </button>
        </>
      )}
    </div>
  );
};

export default TODO;
