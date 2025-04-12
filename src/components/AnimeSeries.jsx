const AnimeSeries = () => {
    const anime = "Vinland Saga";
    const rating = 9.5;
    const genre = "Action, Adventure, Drama";
    const summary = "Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland";
   let age = 19;
    return (
      <div>
        <img src="/public/Vinnland.png" alt="ok" width = "40%" height = "40%"/>
      <h1>Name : {anime}</h1>
      <h2>Rating = {rating}</h2>
      <h3>Genre : {genre}</h3>
      <p>Summary : {summary} </p>
      <button>{age >= 18 ? "Watch Now" : "Not Available"} </button>
      </div>
    )
}
    export const Footer = () => {
    return (
        <p>Copyright @FARAZAYAZ</p>
    )
}
    export default AnimeSeries;