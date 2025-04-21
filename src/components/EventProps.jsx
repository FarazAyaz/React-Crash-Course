import React from 'react'

const EventProps = () => {
    const HandleWelcomeUser = (user) =>{
        alert(`My Name is ${user}`)
    };
const handleHover = () => {
    alert("Thanks Faraz For Hovering Me")
};
  return (
    <>
      <WelcomeUser onClick = {()=>HandleWelcomeUser("Faraz")}
        onMouseEnter = {handleHover}
        />
    </>
  )
}
const WelcomeUser = ({onClick,onMouseEnter}) => {
    // const {onClick, onMouseEnter} = data;
    const HandleGreeting = ()=> {
        console.log("HEllo Faraz");
        }
    return (
        <>
        <button onClick={onClick}>Click Me</button>
        <button onMouseEnter={onMouseEnter}>Hover Me</button>
        <button onClick={HandleGreeting}>Greeting</button>    
        </>
    )
}
export default EventProps
// import React from 'react';

// const WelcomeUser = (props) => {
//   const Greeting = () => {
//     console.log("Hello Faraz");
//     props.onClick();
//   };

//   return (
//     <>
//       <button onClick={props.onClick}>Click Me</button>
//       <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
//       <button onClick={Greeting}>Greeting</button>
//     </>
//   );
// };

// const EventProps = () => {
//   const HandleWelcomeUser = (user) => {
//     alert(`Welcome ${user}`);
//   };

//   const handleHover = () => {
//     alert("Thanks Faraz For Hovering Me");
//   };

//   return (
//     <>
//       <WelcomeUser
//         onClick={() => HandleWelcomeUser("Faraz")}
//         onMouseEnter={handleHover}
//       />
//     </>
//   );
// };

// export default EventProps;
