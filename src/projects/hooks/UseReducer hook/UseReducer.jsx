import React, { useReducer } from 'react'

const UseReducer = () => {
    const reducer = (state, action) => {
      // if(action.type === 'Increment') {
      //   return state + 1;
      // }
      // if (action.type === 'Decrement') {
      //   return state - 1;
        switch (action.type) {
        case "Increment":
        return state + 2;
        case "Decrement":
        return state - 2;
        case "Reset":
        return (0);
        default :
        return state;
      }
    };

    const [Count, dispatch] = useReducer(reducer, 0);

     return(
    <div className='flex flex-col gap-3'>
      <h1>{Count}</h1>
      <button onClick={()=> dispatch({type: 'Increment'})} className='text-5xl bg-amber-400 p-4 m-4 text-black'>Increment</button>
      <button onClick={()=> dispatch({type: 'Decrement'})} className='text-5xl bg-amber-400 p-4 m-4 text-black space-x-4'>Decrement</button>
      <button onClick={()=> dispatch({type: 'Reset'})} className='text-5xl bg-amber-400 p-4 m-4 text-black space-x-4'>Reset</button>
    </div>
  )
}


export default UseReducer
