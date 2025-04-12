import SeriesData from "../api/seriesData.json";

const AnimeSeries = () => {
  return (
    <ul>
      {SeriesData.map((Series) => (
        <li key={Series.id}>
          <div>
            <img src={Series.img_url} alt="ok" width="40%" height="40%" />
            <h1>Name : {Series.name}</h1>
            <h2>Rating = {Series.rating}</h2>
            <h3>Genre : {Series.genre}</h3>
            <p>Caste : {Series.cast}</p>
            <p>Summary : {Series.description}</p>
            <a href={Series.watch_url} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AnimeSeries;
