import React, { useState } from 'react';
import Usestate from './Usestate';

const Practicehook = () => {
  const [users, setUsers] = useState([
    { name: "Faraz Ayaz", age: 20 },
    { name: "Adnan Ayaz", age: 23 },
    { name: "Siffat Ayaz", age: 25 },
    { name: "Ayaz", age: 28 }
  ]);
   const userCount = users.length;
   const avg = users.reduce((acc, user)=> acc + user.age, 0) / userCount;
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
      <p>Users {userCount}</p>
      <p>Average Age {avg}</p>
    </>
  );
};

export default Practicehook;

