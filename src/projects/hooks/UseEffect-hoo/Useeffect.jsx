import React, { useEffect, useState } from 'react'
import "./index.css"

const Useeffect = () => {
   const [count, setCount] = useState(0)
   const [name, setName] = useState("")
    
   useEffect(()=> {
    document.title = `Count: ${count}`
    console.log(`Count updated: ${count}`)
   },[count])


  return (
    <div className="container effect-container">
      <h1>useEffectChallenge</h1>
      <p>
        Count: <span> { count} </span>
      </p>
      <button onClick={() => setCount (count + 1)}>Increment</button>
      <p>
        Name:<span>{name}</span>
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default Useeffect
