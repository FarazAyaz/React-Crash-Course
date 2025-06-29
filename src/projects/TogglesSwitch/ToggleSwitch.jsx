import React, { useState } from 'react';
import './Toggle.css';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div
        className="toggle-switch"
        onClick={handleToggle}
        style={{ backgroundColor: isOn ? 'green' : '' }}
      >
        <div className={`switch ${isOn ? 'on' : 'off'}`}>
          <span className="switch-state">{isOn ? 'on' : 'off'}</span>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
