import React, { useState } from 'react'
import "./index.css"

const Useeffect = () => {
   const [count, setCount] = useState(0)
   const [name, setName] = useState("")
  return (
    <div className="container effect-container">
      <h1>useEffect Challenge</h1>
      <p>
        Count: <span> {count} </span>
      </p>
      <button onClick={ () => setCount (count +)   }>Increment</button>
      <p>
        Name: <span>  </span>
      </p>
      <input
        type="text"
        value={}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default Useeffect
