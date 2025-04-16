import SeriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
const AnimeSeries = () => {
  return (
    <ul>
      {SeriesData.map((Series) => (
       <SeriesCard key= {.id} Data={Series}/>
      ))}
    </ul>
  );
};

export default AnimeSeries;
