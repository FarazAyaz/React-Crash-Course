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
import TODO from "./projects/TODO-MASTERED/TODO";
import Todo from "./projects/Todo/Todo";
import MyTodo from "./projects/MyTodo/MyTodo";
import Counter from "./projects/Advance Counter/Counter";
import LoginForm from "./projects/hooks/UseEffect-hoo/LoginForm";
import RegistrationForm from "./projects/hooks/UseEffect-hoo/RegistrationForm";
import Useeffect from "./projects/hooks/UseEffect-hoo/Useeffect";
import FecthingData from "./projects/hooks/UseEffect-hoo/FecthingData";
import PokemonCard from "./projects/hooks/UseEffect-hoo/PokemonCard";
import Useref from "./projects/hooks/Useref hook/Useref";
import { BioContext, BioProvider } from "./projects/hooks/CONTEXTAPI";
import { Home } from "./projects/hooks/CONTEXTAPI/Home";
import { ThemeProvider } from "./projects/hooks/CONTEXTAPI/DarkTheme";
import { DarkLight } from "./projects/hooks/CONTEXTAPI/DarkTheme";
import UseReducer from "./projects/hooks/UseReducer hook/UseReducer";

const App = () => {
  return (
    <div >
      {/* <h1>Netflix Top Best Series</h1> */}
      {/* <AnimeSeries/> */}
      {/* <Profile/> */}
      {/* <EventHandling/> */}
      {/* <EventProps/> */}
      {/* <NewFile /> */}
      {/* <Usestate/> */}
      {/* <Practicehook/> */}
      {/* <BASICPROP Text={"Click Me"} onClick={handleClick} /> */}
      {/* <ToggleSwitch/> */}
      {/* <Todo /> */}
      {/* <TODO /> */}
      {/* <MyTodo /> */}
      {/* <Counter /> */}
       {/* <RegistrationForm /> */}
       {/* <LoginForm /> */}
       {/* <Useeffect /> */}
       {/* <FecthingData /> */}
      <PokemonCard />
      {/* <Useref /> */}
      {/* <BioProvider>
        <Home />
      </BioProvider> */}
      {/* <ThemeProvider>
        <DarkLight />
      </ThemeProvider> */}
      {/* <UseReducer /> */}
    </div>
  );
};

export default App;
