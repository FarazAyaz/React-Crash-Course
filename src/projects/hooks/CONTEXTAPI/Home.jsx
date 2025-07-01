import { use } from "react"
import { BioContext } from "."

export const Home = () => {
   const {myName,myAge} = use(BioContext)

    return <>
        <h1>My Name Is {myName}</h1>
        <h1>I Am {myAge} Years Old</h1>
    </>
}