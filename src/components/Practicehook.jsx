import React, { useState } from 'react';
import Usestate from './Usestate';

const Practicehook = () => {
  const [users, setUsers] = useState([
    { name: "Faraz Ayaz", age: 20 },
    { name: "Adnan Ayaz", age: 23 },
    { name: "Siffat Ayaz", age: 25 },
    { name: "Ayaz", age: 28 }
  ]);

  return (
    <>
      <h1>Users List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <h2>Name: {user.name}</h2>
            <h3>Age: {user.age}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Practicehook;

