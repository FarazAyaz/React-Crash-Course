import React from 'react'
// const Function = () => {
//     alert("Hello Faraz")
// }
const Parameter = (name) => {
   alert(`Hi, I am ${name}`)
}

const EventHandling = () => {
  return (
    <>
     <h1
  className="cursor-pointer text-white text-xl font-semibold bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-500 px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out w-[150px]"
  onClick={()=> Parameter("Faraz Ayaz Khan")}
>
  Click Me
</h1>

    </>
  )
}

export default EventHandling
