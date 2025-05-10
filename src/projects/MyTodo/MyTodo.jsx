import React from 'react'

const MyTodo = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-200 w-screen '>
        <h1 className='font-semibold text-3xl '>All Tasks</h1>
        <div className='flex w-[40%] mt-8 gap-8 items-center justify-center'>
            <input type="search" placeholder='Enter Todo' className='w-full px-4 py-2 rounded-md outline-none border-1 border-gray-500 focus:border-yellow-500' />
            <button className='bg-yellow-500 text-white px-2 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out cursor-pointer '>Add Todo</button>
        </div>
      
    </div>
  )
}

export default MyTodo
