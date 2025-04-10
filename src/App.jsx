import React from 'react'
const App = () => {
  const AnimeSeries = () => {
    return (
      <div>
        <img src="/public/Vinnland.png" alt="ok" width = "40%" height = "40%"/>
      <h1>VINLAND SAGA</h1>
      <h2>Rating = 9.7</h2>
      <h3>Genre : Action, Adventure, Drama</h3>
      <p>Summary : Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland </p>
      </div>

    )
  }
  return (
    <div>
      <AnimeSeries/>
      <AnimeSeries/>
      <AnimeSeries/>
      <AnimeSeries/>
      <AnimeSeries/>

    </div>
  )
}



export default App

