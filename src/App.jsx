import React from "react";
import AnimeSeries from "./components/AnimeSeries";
// import Profile from './components/Profile';
import EventHandling from "./components/EventHandling";
import EventProps from "./components/EventProps";
import NewFile from "./components/NewFile";
import Usestate from "./components/Usestate";
import Practicehook from "./components/Practicehook";
import BASICPROP from "./components/BASICPROP";
import ToggleSwitch from "./projects/TogglesSwitch/ToggleSwitch";
const App = () => {
  // <AnimeSeries/>
  // <EventHandling/>
  const handleClick = () => {
    alert("Button Clicked");
  };

  <EventProps />;
  return (
    <div>
      {/* <h1>Netflix Top Best Series</h1> */}
      {/* <AnimeSeries/> */}
      {/* <Profile/> */}
      {/* <EventHandling/> */}
      {/* <EventProps/> */}
      {/* <NewFile /> */}
      {/* <Usestate/> */}
      {/* <Practicehook/> */}
      {/* <BASICPROP Text={"Click Me"} onClick={handleClick} /> */}
      <ToggleSwitch/>
    </div>
  );
};

export default App;
