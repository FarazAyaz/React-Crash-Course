import React from 'react';

const SeriesCard = ({ Data }) => {
  console.log(Data);
  const {img_url, name, rating, genre, cast, description, watch_url } = Data;
  return (
    <li>
        <img src={img_url} alt={name} width="40%" height="40%" />
        <h1>Name: {name}</h1>
        <h2>Rating: <span className={`rating ${rating >= 8.5 ? "Super_hit" : "Average"}`}>
          {rating}
          </span>
          </h2>
        <h3>Genre:{genre}</h3>
        <p>Cast: {cast}</p>
        <p>Summary: {description}</p>
        <a href= {watch_url} target="_blank" rel="noreferrer">
          <button className= {`button ${rating >= 8.5 ? "Super_hit" : "Average"}`}>
            Watch Now
          </button>
        </a>
    </li>
  );
};

export default SeriesCard;
