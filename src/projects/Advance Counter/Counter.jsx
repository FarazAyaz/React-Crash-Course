import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleCountInc = () => {
    if (count >= 100) {
      alert('You have reached the maximum limit of 100');
      return;
    }
    setCount(count + step);
  };
  const handleCountDec = () => {
    if (count <= 0) {
      alert('You have reached the minimum limit of 0');
      return;
    }
    setCount(count - step);
  };
  const handleResetButton = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full max-w-full  bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="font-bold text-4xl mb-[10px]">ADVANCE COUNTER</h1>
      <button
        className=" my-8 w-full sm:w-auto bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out cursor-pointer text-sm sm:text-base"
        onClick={handleCountInc}
      >
        Increment
      </button>
      <h1 className="font-bold text-3xl">{count}</h1>
      <h1 className="font-bold text-3xl">
        steps
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="border-2 border-gray-300 rounded-lg px-4 py-2 ml-2"
        />
      </h1>

      <button
        className=" mt-8 w-full sm:w-auto bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out cursor-pointer text-sm sm:text-base"
        onClick={handleCountDec}
      >
        Decrement
      </button>
      <button>
        <h1
          className=" my-8 w-full sm:w-auto bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out cursor-pointer text-sm sm:text-base"
          onClick={handleResetButton}
        >
          Reset
        </h1>
      </button>
    </div>
  );
};

export default Counter;
