import React from 'react';
import Props from './Props';

const NewFile = () => {
  const handleclickuser = () => {
    return alert('HEllo TiperMon');
  };
  const handleClick = () => {
    return alert('Hello TitoMon');
  };
  return (
    <Props
      heading={'Person Details'}
      name={'TunBay'}
      age={20}
      functions={handleClick}
      functionss={handleclickuser}
    />
  );
};

export default NewFile;
