import React from 'react';
import { useRef } from 'react';
const Useref = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleonSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <form onSubmit={handleonSubmit}>
      <input type="text" id="username" ref={username} />
      <br />
      <input type="text" id="password" ref={password} />
      <br />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default Useref;
