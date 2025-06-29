import React from 'react';

const BASICPROP = ({ Text, onClick }) => {
  return (
    <button
      className="text-white text-2xl h-12 bg-gradient-to-br w-[300px] py-2 rounded-lg shadow-lg from-fuchsia-300 to-fuchsia-500 hover:opacity-80"
      onClick={onClick}
    >
      {Text}
    </button>
  );
};

export default BASICPROP;
