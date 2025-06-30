import React, { createContext } from 'react'

export const BioContext = createContext();
export const BioProvider = ({children}) => {
 const myName = "Faraz Ayaz"
 const myAge = 20;
  return (
    <BioContext.Provider value={{ myName, myAge }}> 
    {children}
    </BioContext.Provider>
  )
}
