import React from 'react';

const Props = ({ heading, name, age, functions, functionss }) => {
  return (
    <div className="flex flex-col items-center justify-center text-2xl">
      <h1 onMouseEnter={functionss}>{heading}</h1>
      <h2 onClick={functions}>{name}</h2>
      <h3>{age}</h3>
    </div>
  );
};

export default Props;
