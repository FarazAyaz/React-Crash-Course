import React, { useState } from 'react';

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    console.log(userData);
    // Add validation or API call here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-3xl block text-center font-semibold">Sign-Up</h1>
        </div>
        <hr className="mt-3" />
        <form onSubmit={handleSubmitData}>
          <div className="mt-3">
            <label htmlFor="firstName" className="block text-base mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
              className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter First Name"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="lastName" className="block text-base mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
              className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">Create Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Create Password"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="confirmPassword" className="block text-base mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleInputChange}
              className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="w-full border-2 border-indigo-700 bg-indigo-800 text-white text-base py-2 rounded-md text-center">
              Sign-Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
