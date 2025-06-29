import React, { useState } from 'react';

const Usestate = () => {
  const [Count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showPage, setShowPage] = useState(false);

  const Increment = () => {
    if (Count >= 5) {
      alert("Mr Tipermon You can't Go Above 5");
      setShowPage(true);
      return;
    }
    setCount(Count + 1);
  };

  const Decrement = () => {
    if (Count <= 0) {
      setShowModal(true);
    }
    setCount(Count - 1);
  };

  // Full-screen Tipermon Page
  if (showPage) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black text-white text-5xl font-bold cursor-pointer"
        onClick={() => setShowPage(false)}
      >
        You Are Tipermon
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen">
      <button
        onClick={Increment}
        className="bg-gradient-to-br from-fuchsia-400 to-fuchsia-700 px-6 py-2 rounded-lg text-2xl text-white max-w-fit"
      >
        Increment
      </button>

      <h1 className="px-6 py-2 bg-gray-200 rounded text-3xl font-semibold">{Count}</h1>

      <button
        onClick={Decrement}
        className="bg-gradient-to-br from-fuchsia-400 to-fuchsia-700 px-6 py-2 rounded-lg text-2xl text-white max-w-fit"
      >
        Decrement
      </button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-2xl flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div className="bg-white rounded-lg shadow-xl p-16 text-2xl font-bold text-center">
            YOU ARE A TITOMON
          </div>
        </div>
      )}
    </div>
  );
};

export default Usestate;
